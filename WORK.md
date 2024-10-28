# Documenting Progress

## Project Research
- Reviewing project structure and identifying dependencies I need to learn more about.
- Getting familiar with Vue.js library (https://vuejs.org/guide/quick-start.html), since I'm not familiar with it. Covering basics like template syntax, reactivity fundamentals
- Learing about Nuxt and how it works with Vue 3. Source - documentation: https://nuxt.com/docs/getting-started/introduction. Covering configuration, routing, data fetching and state management
- Learing about Pinia library and its roles in the component state management (state, actions, getters)

## Authentication
- Getting familiar with api structure using Swagger and testing endpoints with Postman
- Planning implementation of user authentication part of the project
- built basic login form
- added login post request to login component to make sure that user can login using creds (issue with cors - reached out Justin, tried browser externsion and vite proxy server; the issue was related that vite server was running on port 3001, not 300 - switching resolved the issue)
- added setUser action to current store to mutate the "user" state and use it after successful login response
- updated fetching user info to the account page (researched the component lifecycle hook available - onMounted for simplicity)
- added logout functionality to the account page
- decided to refactor networking code to the api service - this cleaned up components
- implemented global auth middleware after researching the topic - this is simple version, since only one middleware is added and it's global. Had some minor issues with the redirect loop to login during first implementation
## Settings Modal and Chat Paste
- added basic version of the modal settings component - had to do research on modals in general and ways to implement them; after a couple of iterations ended up with version that follows vue.js official examples using teleport and transition functionality
- before implementing basic prevent pasting functionality had to research how to attach event listener to element and ClipboardEvent functionality in general
