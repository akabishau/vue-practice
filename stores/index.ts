import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        user: <User | null>null,
    }),

    actions: {
      setUser(user: User) {
        this.user = user;
      }
    }

});

type User = {
    id: number;
    username: string;
    settings: {
        enablePaste: boolean;
    };
};
