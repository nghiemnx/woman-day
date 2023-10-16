import email_data from "./data/woman.email.json";

export function checkEmailExists(email: string): boolean {
  const emailOnly = email_data.map((e) => e.email);
  return emailOnly.includes(email);
}

export const AUTH_DOMAIN =
  "797942620653-seq35gb5q5oq0f237sad0jnpumgducq9.apps.googleusercontent.com";
export const GET_USER_INFO_DOMAIN =
  "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";
