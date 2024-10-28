// AUTHENTICATION MIDDLEWARE
import { useStore } from '~/stores';
import { fetchUser } from '~/services/api';

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('TO:', to);
  console.log('FROM:', from);

  const store = useStore();

  // Skip authentication check for the login route
  if (to.path === '/login') {
    if (store.user) {
      return navigateTo('/account');
    }
    return;
  }

  if (!store.user) {
    try {
      const user = await fetchUser();
      if (user) {
        store.setUser(user);
      } else {
        throw new Error('User not authenticated');
      }
    } catch (error) {
      if ((error as { status: number }).status === 401) {
        return navigateTo('/login');
      }
      console.error('Unknown error fetching user', error);
    }
  }
});
