<template>
  <div class="ctn-chat-section">
    <div v-for="(chat, i) in listaOrdenada" :key="i">
      <div
        class="cnt-area-message"
        :class="chat.senderType == 'agent' ? 'area-user' : 'area-contact'"
      >
        <div :class="chat.senderType == 'agent' ? 'user' : 'contact'">
          <img v-if="chat.type == 'image'" :src="chat.file" />
          <span v-if="chat.text" class="txt-message">{{ chat.text }}</span>
        </div>
        <div class="txt-info-message">
          <span>{{ horaFormatada(chat.sendAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from "moment";
import "moment/locale/pt-br";
// import { ref } from "vue";
const props = defineProps({
  listaOrdenada: {
    type: Array,
  },
});
function horaFormatada(data) {
  moment.locale("pt-br");
  return moment(data).format("LT");
}
</script>

<style lang="scss">
.ctn-chat-section {
  height: 100%;
  overflow: auto;
  background: var(--color-fill-neutral-low-1, #f6f6f8);

  padding: 16px 24px;

  .cnt-area-message {
    padding: 8px 16px 8px 0px;
    .txt-message {
      /* typescale/body/1/regular */
      font-family: IBM Plex Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 28.8px */
    }
    .txt-info-message {
      span {
        color: var(--color-text-on-neutral-low-strong, #232326);
        /* typescale/caption/1 */
        font-family: IBM Plex Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 21.6px */
      }
    }
    img {
      width: 280px;
      max-height: 240px;
      border-radius: 4px;
      background: lightgray 50% / cover no-repeat;
      margin-bottom: 4px;
    }
    .contact {
      width: fit-content;
      padding: 14px 20px;
      border-radius: 6px 6px 6px 2px;
      border: 1px solid var(--color-border-neutral-2, #dcdce1);
      background: var(--color-fill-neutral-low-0, #fff);

      display: flex;
      flex-direction: column;

      .txt-message {
        color: var(--color-text-on-neutral-low-strong, #232326);
      }
    }
    .user {
      width: fit-content;
      padding: 14px 20px;
      border-radius: 6px 6px 2px 6px;
      border: 1px solid var(--color-border-primary-1, #374fc9);
      background: var(--color-fill-primary-3, #374fc9);
      display: flex;
      flex-direction: column;

      .txt-message {
        color: var(--color-text-on-color-high-strong, #fff);
      }
    }
  }
  .area-user {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
