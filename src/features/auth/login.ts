import {
  authenticatedFetch,
  unauthenticatedFetch,
} from '~/features/auth/auth.ts';
import { store } from '~/store.tsx';
import {
  login as loginAction,
  logout as logoutAction,
  setUserData,
} from '~/features/auth/authSlice.ts';

interface LoginBodyResponse {
  token: string;
}

interface UserProfileBodyResponse {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export async function login(email: string, password: string) {
  // authenticate the user
  const loginResponse = await unauthenticatedFetch('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (loginResponse.status !== 200) {
    return { error: 'Invalid credentials' };
  }
  const { token }: LoginBodyResponse = (await loginResponse.json()).body;

  // get the user data
  const userResponse = await unauthenticatedFetch('/user/profile', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (userResponse.status !== 200) {
    return { error: 'Error fetching user data' };
  }
  const user: UserProfileBodyResponse = (await userResponse.json()).body;

  // store token and user data in the store
  store.dispatch(
    loginAction({
      authToken: token,
      user: { firstName: user.firstName, lastName: user.lastName },
    })
  );

  return { error: null };
}

export async function logout() {
  store.dispatch(logoutAction());
}

export async function updateUserProfile(firstName: string, lastName: string) {
  const response = await authenticatedFetch('/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  if (response.status !== 200) {
    return { error: 'Error updating user profile' };
  }

  // update cached user data in the store
  store.dispatch(setUserData({ firstName, lastName }));

  return { error: null };
}
