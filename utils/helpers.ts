import { createStandaloneToast } from '@chakra-ui/react';
import Router from 'next/router';

import { useEnvVars } from './useEnvVars';

export const toast = createStandaloneToast();

export const logOut = () => {
  localStorage.clear();
  Router.push('/');
};

type ClientConfig = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Record<string, any>;
  headers?: HeadersInit;
} & RequestInit;

export const client = async (
  endpoint: string,
  { method, data, headers: customHeaders, ...customConfig }: ClientConfig = {},
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { API_ENDPOINT } = useEnvVars();
  const token = localStorage.getItem('token');
  const config: ClientConfig = {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : null),
      ...(data ? { 'Content-Type': 'application/json' } : null),
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`${API_ENDPOINT}/${endpoint}`, config).then(async response => {
    if (response.status === 401) {
      logOut();
    }

    const data = await response.json();
    const { success, message } = data;

    if (response.ok) {
      if (data.message) {
        toast({
          title: message,
          variant: 'subtle',
          status: success ? 'success' : 'error',
          isClosable: true,
        });
      }

      return data;
    }
    if (data.message) {
      toast({
        title: message,
        variant: 'subtle',
        status: 'error',
        isClosable: true,
      });
    }

    return Promise.reject(data);
  });
};

export const isString = (value: unknown): value is string => Object.prototype.toString.call(value) === '[object String]';

export const capitalize = (text: string) => text
    ? text
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : text;

export const getCurrencySymbol = (
  currency: string,
  locale: string | string[] = 'en-GB',
) =>
  (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

export const sendGTagSubmitEvent = (
  eventType: 'submit_application' | 'conversion',
): void => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { gtag } = window;
    if (gtag) gtag('event', eventType);
  }
};

export const fetcher = (endpoint: string) => {
  // eslint-disable-next-line
  const { API_ENDPOINT } = useEnvVars();

  return fetch(`${API_ENDPOINT}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  })
    .then(res => {
      if (res.status === 401) {
        logOut();
      } else {
        return res;
      }
    })
    .then(res => res?.json())
    .then(data => data?.data || null);
};

export const createPages = (pagesCount: number) =>
  Array.from({ length: pagesCount }, (_, i) => i + 1);

export function getByPath(obj: any, path: string, def?: string) {
  const paths = path.replace(/\[/g, '.').replace(/]/g, '').split('.');

  paths.forEach((level: string) => {
    obj = obj?.[level];
  });

  if (obj === undefined) {
    return def;
  }

  return obj;
}

export const localizeErrorMessage = (t: any, error: any) => {
  const errorKey = error?.message?.key;
  const errorValues = error?.message?.values;
  const errorMessage = errorKey
    ? t(errorKey, { ...errorValues })
    : error?.message;

  return errorMessage;
};

export const generateArrayOfYears = (
  future?: number,
  past?: number,
): number[] => {
  const current = new Date().getFullYear();
  const max = future ? current + future : current;
  let min: number;
  if (typeof future === 'number' && typeof past === 'undefined') {
    min = current;
  } else if (typeof past === 'number') {
    min = current - past;
  } else {
    min = max - 100;
  }

  const years: number[] = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }

  return years;
};

export const formatPostcode = (postcode: string) => {
  postcode = postcode.replace(' ', '');
  if (postcode.length == 5) {
    postcode = `${postcode.substring(0, 2)  } ${  postcode.substring(2, 5)}`;
  } else if (postcode.length == 6) {
    postcode = `${postcode.substring(0, 3)  } ${  postcode.substring(3, 6)}`;
  } else if (postcode.length == 7) {
    postcode = `${postcode.substring(0, 4)  } ${  postcode.substring(4, 7)}`;
  }

  return postcode.replace(/\s+/g, ' ').trim().toUpperCase();
};
