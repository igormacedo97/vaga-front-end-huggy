<template>
  <div>
    {{ data }}
    oi
    <Mensagens />
  </div>
</template>
<script setup>
const { data } = await useFetch("/api/chats/chat");
</script>
