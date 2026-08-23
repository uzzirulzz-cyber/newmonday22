"# augguest22" 
# newmonday22

## Social sign-in setup

Google, Facebook, and X sign-in use real server-side OAuth flows. The buttons will return to the storefront with a friendly message until provider credentials are configured.

Set these variables in the local `.env` file or in the Vercel project settings. Keep client secrets server-side and never add them to frontend code:

- `APP_URL`: the deployed site URL, for example `https://playbeat.digital`
- `OAUTH_CALLBACK_URL`: `${APP_URL}/api/auth/oauth/callback`
- `JWT_SECRET`: a long random production secret
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET`
- `X_CLIENT_ID` and `X_CLIENT_SECRET`

Register the exact callback URL above in each provider’s developer console. After saving the variables, redeploy the app. Until then, email/password sign-in remains available.
