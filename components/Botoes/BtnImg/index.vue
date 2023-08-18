<template>
  <div class="ctn-btn-img">
    <button :class="icon == 'iconImg' ? 'btn-icon-img' : 'btn-icon-x'">
      <div v-if="icon == 'iconImg'" class="ctn-svg-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="icon-svg"
        >
          <path
            d="M12.5 7C12.8978 7 13.2794 6.84197 13.5607 6.56066C13.842 6.27936 14 5.89782 14 5.5C14 5.10218 13.842 4.72064 13.5607 4.43934C13.2794 4.15803 12.8978 4 12.5 4C12.1022 4 11.7206 4.15803 11.4393 4.43934C11.158 4.72064 11 5.10218 11 5.5C11 5.89782 11.158 6.27936 11.4393 6.56066C11.7206 6.84197 12.1022 7 12.5 7Z"
            fill="#75757B"
          />
          <path
            d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2ZM16 2H2V9.92L5.375 7.22C5.55236 7.078 5.77279 7.00062 6 7.00062C6.22721 7.00062 6.44764 7.078 6.625 7.22L10.925 10.66L12.293 9.293C12.4805 9.10553 12.7348 9.00021 13 9.00021C13.2652 9.00021 13.5195 9.10553 13.707 9.293L16 11.586V2ZM2 16H16V14.414L13 11.414L11.707 12.707C11.533 12.8811 11.3009 12.9849 11.0551 12.9986C10.8094 13.0122 10.5672 12.9348 10.375 12.781L6 9.28L2 12.48V16Z"
            fill="#75757B"
          />
        </svg>
      </div>

      <div v-if="icon == 'iconX'" class="ctn-svg-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="icon-svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM5.96687 5.96694C6.28639 5.64742 6.80444 5.64742 7.12396 5.96694L8.99996 7.84294L10.876 5.96694C11.1955 5.64742 11.7135 5.64742 12.033 5.96694C12.3526 6.28646 12.3526 6.8045 12.033 7.12402L10.157 9.00002L12.033 10.876C12.3526 11.1955 12.3526 11.7136 12.033 12.0331C11.7135 12.3526 11.1955 12.3526 10.876 12.0331L8.99996 10.1571L7.12396 12.0331C6.80444 12.3526 6.28639 12.3526 5.96687 12.0331C5.64735 11.7136 5.64735 11.1955 5.96687 10.876L7.84288 9.00002L5.96687 7.12402C5.64735 6.8045 5.64735 6.28646 5.96687 5.96694Z"
            fill="#75757B"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
});
</script>

<style lang="scss">
.ctn-btn-img {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  .btn-icon-img {
    padding: 2px 4px;
    .ctn-svg-icon {
      padding: 3px;
      line-height: 0;
    }

    &:hover {
      border-radius: 8px;
      background: var(--color-fill-primary-1, #d8defc);

      /* shadow/button */
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);

      .icon-svg path {
        fill: var(--color-text-on-neutral-low-cta, #2934a5);
      }
    }

    &:active {
      border-radius: 8px;
      background: var(--color-fill-primary-2, #a4b2f8);
      .icon-svg path {
        fill: var(--color-text-on-neutral-low-cta, #2934a5);
      }
    }
  }

  .btn-icon-x {
    padding: 2px 4px;
    .ctn-svg-icon {
      padding: 3px;
      line-height: 0;
    }

    &:hover {
      border-radius: 8px;
      background: var(--color-fill-danger-1, #fbdbdb);

      /* shadow/button */
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);

      .icon-svg path {
        fill: var(--color-text-on-neutral-low-danger, #af2f30);
      }
    }

    &:active {
      border-radius: 8px;
      background: var(--color-fill-danger-2, #f7afae);
      .icon-svg path {
        fill: var(--color-text-on-neutral-low-danger, #af2f30);
      }
    }
  }
}
</style>
