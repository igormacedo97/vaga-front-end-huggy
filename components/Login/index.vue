<template>
  <div class="ctn-login">
    <div class="area-txt-login">
      <h1 class="titulo-area-login">Área de Login</h1>
      <p class="subtitulo-info-login">
        Faça login para acessar nosso super-aplicativo
      </p>
    </div>
    <div class="btn-login">
      <a
        href="https://auth.huggy.app/oauth/authorize?scope=install_app%20read_agent_profile&response_type=code&redirect_uri=https://ec56-186-233-111-182.ngrok-free.app/api/callback&client_id=APP-afbe9134-bdfb-4427-a208-933bbd162b35"
      >
        <BotoesPadrao :isDisabled="false">Fazer login com a Huggy</BotoesPadrao>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ctn-login {
  height: 100vh;
  background: var(--color-fill-neutral-low-0);
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .area-txt-login {
    .titulo-area-login {
      color: var(--color-text-on-neutral-low-cta, #2934a5);

      /* typescale/tittle/1 */
      font-family: IBM Plex Sans;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 46.8px */
    }
    .subtitulo-info-login {
      color: var(--color-text-on-neutral-low-default, #46464a);

      /* typescale/body/1/regular */
      font-family: IBM Plex Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 28.8px */
    }
  }

  .btn-login {
    margin: 64px 0 48px 0;
  }
}
</style>
