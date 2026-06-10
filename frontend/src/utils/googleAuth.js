const GOOGLE_AUTH_INTENT_KEY = 'googleAuthIntent';

export const setGoogleAuthIntent = (intent) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(GOOGLE_AUTH_INTENT_KEY, intent);
};

export const getGoogleAuthIntent = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.sessionStorage.getItem(GOOGLE_AUTH_INTENT_KEY);
};

export const clearGoogleAuthIntent = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.removeItem(GOOGLE_AUTH_INTENT_KEY);
};