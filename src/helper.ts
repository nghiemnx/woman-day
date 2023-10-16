import email_data from "./data/woman.email.json";

export function checkEmailExists(email: string): boolean {
  const emailOnly = email_data.map((e) => e.email);
  return emailOnly.includes(email);
}

export const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN as string;
export const GET_USER_INFO_DOMAIN =
  "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";
