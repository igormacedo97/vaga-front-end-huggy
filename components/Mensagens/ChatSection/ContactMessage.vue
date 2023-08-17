<template>
  <div class="cnt-area-contact-message">
    <div
      :class="
        dataMessage.type == 'fill' ? 'contact-message-fill' : 'contact-message'
      "
    >
      <img v-if="dataMessage.imgUrl" :src="dataMessage.imgUrl" />
      <span v-if="dataMessage.text" class="txt-contact-message">{{
        dataMessage.text
      }}</span>
    </div>
    <div class="contact-info">
      <span>{{ dataMessage.hora }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  dataMessage: {
    type: Object,
  },
});
</script>
<style lang="scss">
.cnt-area-contact-message {
  padding: 8px 16px 8px 0px;
  .contact-message,
  .contact-message-fill {
    padding: 14px 20px;
    border-radius: 6px 6px 6px 2px;
    border: 1px solid var(--color-border-neutral-2, #dcdce1);
    background: var(--color-fill-neutral-low-0, #fff);

    display: flex;
    flex-direction: column;

    .txt-contact-message {
      color: var(--color-text-on-neutral-low-strong, #232326);

      /* typescale/body/1/regular */
      font-family: IBM Plex Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 28.8px */
    }

    img {
      width: 280px;
      height: 240px;
      border-radius: 4px;
      background: lightgray 50% / cover no-repeat;
      margin-bottom: 4px;
    }
  }
  .contact-message {
    width: fit-content;
  }
  .contact-message-fill {
    width: auto;
  }
  .contact-info {
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
}
</style>
