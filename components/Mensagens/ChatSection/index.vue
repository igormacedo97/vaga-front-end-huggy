<template>
  <div class="ctn-chat-section">
    <div v-for="dataMessage in listaInvertida" :key="dataMessage.id">
      <div v-if="dataMessage.send == 1">
        <MensagensChatSectionContactMessage :dataMessage="dataMessage" />
      </div>
      <div v-if="dataMessage.send == 2">
        <MensagensChatSectionUserMessage :dataMessage="dataMessage" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageLista: [
        {
          id: 3,
          text: `kkkkkkk`,
          type: "hug",
          send: 2, //1 contato (bg: branco), 2 - usuário (bg: azul)
          imgUrl: null,
          hora: "09:12",
        },
        {
          id: 2,
          text: null,
          type: "hug",
          send: 2, //1 contato (bg: branco), 2 - usuário (bg: azul)
          imgUrl: "https://i.imgur.com/eEOPxmI.jpeg",
          hora: "09:12",
        },
        {
          id: 1,
          text: "Bom dia",
          type: "hug",
          send: 1, //1 contato (bg: branco), 2 - usuário (bg: azul)
          imgUrl: "https://i.imgur.com/NuepZ60.jpeg",
          hora: "08:55",
        },
      ],
    };
  },
  computed: {
    listaInvertida() {
      return this.messageLista.slice().reverse();
    },
  },
};
</script>
<style lang="scss">
.ctn-chat-section {
  background: var(--color-fill-neutral-low-1, #f6f6f8);

  padding: 16px 24px;
}
</style>
