<template>
  <div>
    <button
      class="btn-component"
      :class="type == 'enviar' ? 'btn-send' : 'btn-primary'"
      :disabled="isDisabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss">
.btn-component {
  width: 100%;
  border-radius: 8px;

  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;

  color: #fff;

  /* typescale/button */
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: 0.48px;
}
.btn-primary {
  background: var(--color-fill-primary-4);

  &:hover {
    background: var(--color-fill-primary-3);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
  }
  &:active {
    background: var(--color-fill-primary-5);
  }
  &:disabled {
    cursor: default;
    background: var(--color-fill-neutral-low-4);
    box-shadow: none;
  }
}

.btn-send {
  background: var(--color-fill-success-4, #38a96d);

  &:hover {
    background: var(--color-fill-success-3, #47c480);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
  }
  &:active {
    background: var(--color-fill-success-5, #2b8656);
  }
  &:disabled {
    cursor: default;
    background: var(--color-fill-neutral-low-4);
    box-shadow: none;
  }
}
</style>
