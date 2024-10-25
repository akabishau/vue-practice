# Skill Struck Settings Project

In a school setting, teachers are often concerned with students being able to copy and paste questions into a chat window with an AI model. The teachers are afraid that students will not learn anything because of how little effort is required to get the right answer from copying and pasting the questions. Teachers have asked for a setting to prevent pasting copied text into the chat box with an AI model.

## Project Description

The purpose of this project is to interact with an API for authentication and to read and write user settings. Then to implement the `enablePaste` setting on the platform, with the ability to enable and disable that setting to change the behavior of pasting text into the chat window.

To complete this project, please add a settings modal with the option to enable or disable paste. The state of this setting can be accessed by making a request to the /user endpoint of the API, which returns the user information including user settings. This setting can be updated by making a POST request to the /user endpoint with the new value of the settings. See the API documentation below for more details.

**Requirements**

-   Settings Modal accessible from the navigation bar
-   Interface with authentication endpoints (login, logout, user)
-   Load settings from API
-   Save settings changes to API
-   Add setting to disable paste into chat window
-   Implement logic to prevent paste when setting is enabled
-   Document your development process in the `WORK.md` file (show your thought process and what steps you took to complete this project. Highlight challenges you faced, and what resources you used)
-   Once you have finished the project, create a Pull Request in GitHub with your changes

**Optional**

-   Middleware to check authentication and prevent access if unauthenticated
-   Utilize the Pinia store to access and update user settings on the page
-   Don't send the request to save settings if nothing has changed
-   Toast messages for success/error responses from the API

## API Documentation

Requests can be made to the API located at this base URL: `https://test-server.skillstruck.com/settings`

Here's a list of the endpoints:

-   POST `/login`
-   GET `/logout`
-   GET `/user`
-   POST `/user`

An example request to get the user data would be GET `https://test-server.skillstruck.com/settings/user`.

View the full documentation for the API (in a user-friendly way) by copying the contents of **api.yaml** into https://editor.swagger.io. This shows the expected formats for request body and response body for each endpoint.

NOTE: the API will not persist data. Upon logging out, the user settings will be erased and logging back in will restore the user to the initial state. This is expected behavior, do not worry about persisting the state. The state should persist as long as the user is logged in.

NOTE: the authentication token/cookie set by the API server expires after 12 hours. You will need to log in again after the cookie has expired.

Use the following credentials to authenticate with the API:

-   username: `test@skillstruck.com`
-   password: `Z6V3tfZzJBS2bWVddDXY6C8BHibfkT3M53cH8J5wrBHro`

## Tips

-   This project is set up using Nuxt 3, Vue 3, Pinia, and Tailwind
-   Look through the project for examples of how different aspects might work if you are not familiar with Vue or Nuxt.
-   When dealing with authentication, use whatever you are familiar with to make those requests. Make sure that you **include credentials** when making requests, to ensure that cookies are sent with the request. The authentication works through cookies set by the API server.
-   The Pinia store can be read from / written to directly without needing "mutations", see more: [Pinia Docs](https://pinia.vuejs.org/ssr/nuxt.html)
-   You can create the modal using whatever method you prefer

## Nuxt Project Info

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

```bash
# npm
npm ci
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```
