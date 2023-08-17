<template>
  <div>
    <div class="ctn-titulo-minhas-mensagens">
      <h1 class="titulo-minhas-mensagens">Minhas Mensagens</h1>
    </div>
    <!-- transformar em v-for -->
    <div class="ctn-area-lista-conversas">
      <MensagensChatCard :cardActive="false" />
      <MensagensChatCard :cardActive="false" />
    </div>
  </div>
</template>

<style lang="scss">
.ctn-titulo-minhas-mensagens {
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-border-neutral-1, #e8e8eb);
  .titulo-minhas-mensagens {
    color: var(--color-text-on-neutral-low-cta, #2934a5);

    /* typescale/tittle/2 */
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%; /* 36px */
  }
}

.ctn-area-lista-conversas {
  // background: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 8px 0;
}
</style>
