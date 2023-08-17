<template>
  <div class="ctn-writing-section">
    <div class="area-text">
      <div class="area-input">
        <textarea
          v-model="textareaContent"
          ref="autoResizeTextarea"
          class="auto-resize-textarea"
          rows="1"
          type="text"
          placeholder="Escreva sua mensagem..."
        ></textarea>
      </div>
      <div class="btn-img"><BotoesBtnImg /></div>
    </div>
    <div class="btn-enviar">
      <BotoesPadrao :isDisabled="!textareaContent" :type="'enviar'"
        >Enviar</BotoesPadrao
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textareaContent: "",
    };
  },
  methods: {
    adjustTextareaHeight() {
      const textarea = this.$refs.autoResizeTextarea;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
  },
  watch: {
    textareaContent() {
      this.$nextTick(this.adjustTextareaHeight);
    },
  },
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
        -moz-appearance: none;
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
    }
  }
  .btn-enviar {
    margin-top: 8px;
  }
}
</style>
