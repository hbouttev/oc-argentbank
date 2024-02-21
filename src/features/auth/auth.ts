import { redirect } from 'react-router-dom';
import { store } from '~/store';

/**
 * A wrapper around the fetch API.
 * Fetch data from the API with the user's authentication token.
 */
export function authenticatedFetch(endpoint: string, init?: RequestInit) {
  const token = store.getState().auth.authToken;
  if (!token) {
    throw new Error('User is not authenticated.');
  }
  return fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${token}` },
  });
}

/**
 * A wrapper around the fetch API.
 * Fetch data from the API without the user's authentication token.
 */
export async function unauthenticatedFetch(
  endpoint: string,
  init?: RequestInit
) {
  return fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, init);
}

/**
 * Check if the user is authenticated. Use this function in every loader of
 * protected routes.
 * If the user is not authenticated, it will redirect to the login page.
 */
export function authenticateUser() {
  const { authToken, user } = store.getState().auth;
  if (!authToken) {
    throw redirect('/login');
  }
  return user;
}
