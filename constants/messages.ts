import type { Toast } from '~/types';


export const toastMessages: Record<string, Toast> = {
  settingsSaved: {
    message: 'Settings updated successfully!',
    type: 'success',
  },
  settingsFailed: {
    message: 'Failed to save settings. Please try again.',
    type: 'error',
  },
  loginSuccess: {
    message: 'Logged in successfully!',
    type: 'success',
  },
  loginError: {
    message: 'Failed to log in. Check your credentials and try again.',
    type: 'error',
  },
  logoutSuccess: {
    message: 'Logged out successfully!',
    type: 'success',
  },
  chatPasteDisabled: {
    message: 'Pasting content in chat is not allowed.',
    type: 'error',
  },
};