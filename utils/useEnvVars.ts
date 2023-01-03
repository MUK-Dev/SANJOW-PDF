export function useEnvVars() {
  const ENV = process.env.NEXT_PUBLIC_ENV as string;
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL as string;
  const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS as string;
  const CURRENCY_CODE = process.env.NEXT_PUBLIC_CURRENCY_CODE as string;
  const CURRENCY_SYMBOL = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL as string;
  const WEBSITE_UUID = process.env.NEXT_PUBLIC_WEBSITE_UUID as string;
  const MZ_URL = process.env.NEXT_PUBLIC_MZ_URL as string;
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

  return {
    ENV,
    EMAIL,
    ADDRESS,
    CURRENCY_CODE,
    CURRENCY_SYMBOL,
    WEBSITE_UUID,
    MZ_URL,
    API_ENDPOINT,
  };
}
