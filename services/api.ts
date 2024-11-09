import type { User, UserSettings, LoginCredentials } from '~/types';

const BASE_URL = 'https://test-server.skillstruck.com/settings';

export async function fetchUser(): Promise<User | null> {
  try {
    const user = await $fetch(`${BASE_URL}/user`, {
      credentials: 'include',
    });
    return user as User;
  } catch (error) {
    return null;
  }
}

export async function loginUser(credentials: LoginCredentials): Promise<User> {
  try {
    const user = await $fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });
    return user as User;
  } catch (error) {
    console.error('Error during login in service:', error);
    throw error;  // Propagate the error
  }
}


export async function logoutUser(): Promise<void> {
  try {
    await $fetch(`${BASE_URL}/logout`, {
      credentials: 'include',
    });
  } catch (error) {
    console.error('logoutUser error', error);
  }
}


export async function saveUserSettings(settings: UserSettings): Promise<User> {
  try {
    const user = await $fetch(`${BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ settings }),
      credentials: 'include',
    });
    return user as User;  // Return the updated user object
  } catch (error) {
    console.error('Error saving user settings:', error);
    throw error;  // Propagate the error
  }
}