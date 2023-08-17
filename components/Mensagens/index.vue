<template>
  <div class="ctn-chats-geral">
    <div class="ctn-area-minhas-mensagens">
      <MensagensMinhasMensagens />
    </div>
    <div class="ctn-area-conversa">
      <MensagensConversa />
    </div>
  </div>
</template>

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
  }
}
</style>
