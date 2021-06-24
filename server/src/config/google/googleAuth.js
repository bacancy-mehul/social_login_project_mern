// https://developers.google.com/identity/sign-in/web/backend-auth
import { OAuth2Client } from "google-auth-library";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const OAuthClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export const verifyToken = async (tokenId) => {
  const ticket = await OAuthClient.verifyIdToken({
    idToken: tokenId,
    audience: GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload
};
