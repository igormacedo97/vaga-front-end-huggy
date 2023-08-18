export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token');
  const body = await readBody(event);
  const id = getRouterParam(event, 'id');



  return $fetch(`https://api.huggy.app/v3/chats/${id}/messages`, {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
})