<template>
  <div :class="cardActive ? 'ctn-chart-card-ativo' : 'ctn-chat-card'">
    <div class="img-chat-card">
      <AvatarContact :imgUrl="dataCard.chatCustomer.photo" />
    </div>
    <div class="ctn-info-user">
      <!-- Ajustar para receber variável banco -->
      <h3 class="body-1-bold">{{ dataCard.chatCustomer.name }}</h3>
      <h4 class="body-2-regular ellipsis-1">
        {{ dataCard.lastMessage.text }}
      </h4>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  cardActive: {
    type: Boolean,
    default: false,
  },
  dataCard: {
    type: Object,
  },
});
// console.log(props.dataCard);
</script>
<style lang="scss">
.ctn-chat-card,
.ctn-chart-card-ativo {
  background: #fff;
  border-radius: 4px;
  width: 100%;
  height: 86px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  &:hover {
    background: var(--color-fill-primary-0, #eef0fc);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
  &:active {
    background: var(--color-fill-primary-1, #d8defc);
  }
  .img-chat-card {
    margin-right: 12px;
  }

  .ctn-info-user {
    .ellipsis-1 {
      color: var(--color-text-on-neutral-low-default, #46464a);
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
      white-space: inherit;
    }
  }
}

.ctn-chart-card-ativo {
  background: var(--color-fill-primary-0, #eef0fc);
}
</style>
