<template>
  <div class="ctn-writing-section">
    <div class="area-text">
      <div class="area-input">
        <textarea
          v-model="textMessage"
          ref="autoResizeTextarea"
          class="auto-resize-textarea"
          rows="1"
          type="text"
          placeholder="Escreva sua mensagem..."
        ></textarea>
      </div>
      <div class="btn-img">
        <div class="imgUrl" v-if="imgUrl">
          <img :src="imgUrl" alt="" />
        </div>
        <BotoesBtnImg v-if="!imgUrl" :icon="'iconImg'" @click="openFileInput" />
        <BotoesBtnImg v-if="imgUrl" :icon="'iconX'" @click="closeFileInput" />
        <input
          ref="fileInput"
          type="file"
          style="display: none"
          accept=".png, .jpg, .jpeg .gif"
          @change="handleFileChange"
        />
      </div>
    </div>
    <div class="btn-enviar">
      <BotoesPadrao
        @click="btnSendMessage"
        :isDisabled="textMessage.trim() == '' && !imgUrl"
        :type="'enviar'"
        >Enviar</BotoesPadrao
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { text } from "stream/consumers";
import { ref } from "vue";

const fileInput = ref();
const imgUrl = ref();

const openFileInput = () => {
  fileInput.value.click();
};

const closeFileInput = () => {
  imgUrl.value = null;
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  imgUrl.value = URL.createObjectURL(selectedFile);
};

const textMessage = ref("");
const emit = defineEmits(["sendMessageChat"]);
const btnSendMessage = () => {
  const dataSend = {
    text: textMessage.value,
    file: imgUrl.value,
    isInternal: false,
  };
  console.log("dataSend ", dataSend);
  emit("sendMessageChat", dataSend);
  textMessage.value = "";
};
</script>

<style lang="scss">
.ctn-writing-section {
  padding: 16px 24px;
  .area-text {
    padding: 8px 8px 0px 8px;
    background: tomato;
    display: flex;
    // width: 406px;
    padding: 8px 8px 0px 8px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 4px;
    border: 1px solid var(--color-border-neutral-1, #e8e8eb);
    background: var(--color-fill-neutral-low-0, #fff);

    .area-input {
      width: 100%;
      padding: 0 12px;
      textarea#story {
        // other stuff
        // -moz-appearance: none;
        outline: 0px none transparent;

        &:focus {
          outline: 0;
        }
      }

      textarea:focus,
      input:focus {
        outline: 0;
      }

      * {
        &:focus {
          outline: 0;
        }
      }

      .auto-resize-textarea {
        width: 100%;
        border: none;
        resize: vertical;
        overflow: hidden;
        transition: height 0.3s ease;

        &:focus {
          outline: none;
        }
      }
    }
    .btn-img {
      margin: 0 0 0 auto;
      display: flex;
      place-items: flex-end;
      .imgUrl {
        padding: 2.4px;
        img {
          border-radius: 2.4px;
          border: 1px solid var(--color-fill-neutral-low-2, #f0f0f2);

          height: auto;
          max-height: 75.2px;
          width: 100%;
          max-width: 81.2px;
        }
      }
    }
  }
  .btn-enviar {
    margin-top: 8px;
  }
}
</style>
