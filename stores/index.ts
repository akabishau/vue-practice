import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        user: <User | null>null,
    }),
});

type User = {
    id: number;
    username: string;
    settings: {
        enablePaste: boolean;
    };
};
