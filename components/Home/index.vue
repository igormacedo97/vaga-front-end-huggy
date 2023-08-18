<template>
  <div class="ctn-chats-geral">
    <div class="ctn-area-minhas-mensagens">
      <MensagensMinhasMensagens
        :idAtivo="idAtivo"
        :chatList="data"
        @openMessage="openMessage($event)"
      />
    </div>
    <div class="ctn-area-conversa">
      <div class="ara-conversa-flex" v-if="messageIsTrue">
        <MensagensHeaderCard :dataHeaderSection="dataHeaderSection" />
        <MensagensChatSection :listaOrdenada="listaOrdenada" />
        <MensagensWritingSection @sendMessageChat="sendMessageChat($event)" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const dataHeaderSection = ref();
const idAtivo = ref();
const messageList = ref([]);
let listaOrdenada = ref();

let idSelected = ref();
const dataSendMessage = ref();

let messageIsTrue = ref(false);

//GET - Obter lista de chats
const { data } = await useFetch("/api/chats/", {
  method: "GET",
});

// GET - Abrir conversa
async function openMessage(event) {
  messageList.value = await useFetch(`/api/chats/${event.id}/messages`, {
    method: "GET",
  });
  if (messageList.value.data.length) {
    messageIsTrue.value = true;
  }

  dataHeaderSection.value = event.chatCustomer;
  idAtivo.value = event.chatCustomer.id;
  listaOrdenada.value = messageList.value.data.reverse();
  idSelected.value = event.id;
}

// POST - Enviar menssagem
async function sendMessageChat(data) {
  dataSendMessage.value = await useFetch(
    `/api/chats/${idSelected.value}/messages`,
    {
      method: "POST",
      body: data,
    }
  );

  listaOrdenada.value.push(dataSendMessage.value.data);
}
</script>

<style lang="scss">
.ctn-chats-geral {
  display: flex;

  .ctn-area-minhas-mensagens {
    width: 37.5%;
    height: 100vh;
    padding: 0 8px;
    border-right: 1px solid var(--color-fill-neutral-low-2, #f0f0f2);
    background: var(--color-fill-neutral-low-0, #fff);
  }
  .ctn-area-conversa {
    // background: gray;
    width: 62.5%;
    height: 100vh;
    .ara-conversa-flex {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
}
</style>
