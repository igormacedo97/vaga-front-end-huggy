<template>
  <div>
    <div v-if="!isAuthenticated">
      <Login />
    </div>
    <div v-if="isAuthenticated">
      <Home />
    </div>
  </div>
</template>
<script setup>
const isAuthenticated = useCookie("token");
</script>
