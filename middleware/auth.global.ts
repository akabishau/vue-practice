// AUTHENTICATION MIDDLEWARE
import { useStore } from '~/stores';
import { fetchUser } from '~/services/api';

export default defineNuxtRouteMiddleware(async (to, from) => {

  const store = useStore();

  // Skip authentication check for the login route
  if (to.path === '/login') {
    if (store.user) {
      return navigateTo('/account');
    }
    return;
  }

  if (!store.user) {
    const user = await fetchUser();
    if (user) {
      store.setUser(user);
    } else {
      return navigateTo('/login')
    }
  }
});
