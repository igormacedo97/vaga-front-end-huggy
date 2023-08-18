<template>
  <img
    :src="imgUrl ? imgUrl : 'https://c.pzw.io/img/avatar-user-boy.jpg'"
    :class="
      size == 'small' || size == 'sm'
        ? 'ctn-image-avatar-sm'
        : 'ctn-image-avatar-big'
    "
  />
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});
</script>
<style lang="scss">
.ctn-image-avatar-big {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid var(--color-border-neutral-1, #e8e8eb);
  background: lightgray 50% / cover no-repeat;
}
.ctn-image-avatar-sm {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--color-border-neutral-1, #e8e8eb);
  background: lightgray 50% / cover no-repeat;
}
</style>
