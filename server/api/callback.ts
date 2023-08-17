interface HuggyResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const {code}  = getQuery(event)
  const callbackUrl = `${config.NUXT_HUGGY_REDIRECT_URL}/api/callback`;
  try {
    const response = await $fetch<HuggyResponse>(
      'https://auth.huggy.app/oauth/access_token',
      {
        method: 'POST',
        body: {
          grant_type: 'authorization_code',
          redirect_uri: callbackUrl,
          client_id: config.NUXT_HUGGY_CLIENT_ID,
          client_secret: config.NUXT_HUGGY_SECRET_ID,
          code,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      }
    );
    const cookieExpiresInSeconds = 60 * 60 * 24 * 30 * 6;
    setCookie(event, 'token', response.access_token, {maxAge: cookieExpiresInSeconds})
    
  } catch(err) {
    console.log(err)
  } finally {
    return sendRedirect(event, config.app.baseURL)
  }
  
})