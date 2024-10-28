export type User = {
    id: number;
    username: string;
    settings: UserSettings;
};

export type UserSettings = {
  enablePaste: boolean;
}


export type LoginCredentials = {
  username: string;
  password: string;
};