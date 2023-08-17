<template>
  <div class="cnt-area-user-message">
    <div
      :class="dataMessage.type == 'fill' ? 'user-message-fill' : 'user-message'"
    >
      <img v-if="dataMessage.imgUrl" :src="dataMessage.imgUrl" />
      <span v-if="dataMessage.text" class="txt-user-message">{{
        dataMessage.text
      }}</span>
    </div>
    <div class="user-info">
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
.cnt-area-user-message {
  padding: 8px 16px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .user-message,
  .user-message-fill {
    padding: 14px 20px;
    border-radius: 6px 6px 2px 6px;
    border: 1px solid var(--color-border-primary-1, #374fc9);
    background: var(--color-fill-primary-3, #374fc9);
    display: flex;
    flex-direction: column;

    .txt-user-message {
      color: var(--color-text-on-color-high-strong, #fff);

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
  .user-message {
    width: fit-content;
  }
  .user-message-fill {
    width: auto;
  }
  .user-info {
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
