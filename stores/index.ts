import { defineStore } from 'pinia';
import { User } from '~/types';

export const useStore = defineStore('store', {
    state: () => ({
        user: null as User | null,
    }),

    actions: {
      setUser(user: User) {
        this.user = user;
      },

      clearUser() {
        this.user = null;
      }
    }
});
