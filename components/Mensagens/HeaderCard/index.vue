<template>
  <div class="ctn-header-card-chat">
    <AvatarContact :size="'small'" />
    <h3 class="name-user-chat">Agostinho Carrara</h3>
  </div>
</template>
<style lang="scss">
.ctn-header-card-chat {
  padding: 12px 16px;
  display: flex;
  align-items: center;

  .name-user-chat {
    color: var(--color-text-on-color-low-strong, #141316);
    /* typescale/body/1/bold */
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */

    margin-left: 8px;
  }
}
</style>
