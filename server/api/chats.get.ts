export default defineEventHandler((event) => {
  const token = getCookie(event, 'token');
  return $fetch('https://api.huggy.app/v3/chats', {
    headers: {
    'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
})