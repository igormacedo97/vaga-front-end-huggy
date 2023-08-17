export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.fullPath !== '/') return navigateTo('/');
});