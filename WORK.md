# Documenting Progress

## Project Review
- Reviewing project structure and identifying dependencies I need to learn more about.
- Getting familiar with Vue.js library (https://vuejs.org/guide/quick-start.html), since I haven't worked with it before. Covering basics like template syntax, reactivity fundamentals.
- Learing about Nuxt and how it works with Vue 3. Source - documentation: https://nuxt.com/docs/getting-started/introduction. Covering configuration, routing, data fetching and state management
- Learing about Pinia library and its roles in the component state management (state, actions, getters)

## Authentication Tasks
- Getting familiar with api structure using Swagger and testing endpoints with Postman.
- Planning implementation of user authentication part of the project.
- Built a basic login form and added a POST request in the login component to authenticate users with credentials.
- Encountered a CORS issue, which was resolved by switching the Vite server to run on port 3000 instead of 3001 (thanks to Justin). I also tried troubleshooting steps like using a browser extension and a Vite proxy server.
- Added a setUser action in the store to "mutate" the user state after a successful login response.
- Added logout functionality to the account page.
- Moved networking code to an apiService, reducing duplication and cleaning up the component code.
- Implemented a global authentication middleware to handle route access. Encountered and resolved a minor issue with a redirect loop to the login page during the initial setup.
## Settings Modal and Chat Paste
- Created a basic version of the settings modal - had to do a reseach on modal design patterns, after a couple of iterations ended up following Vue.js official examples using teleport and transition.
- Implemented basic functionality to prevent pasting in the chat input when disabled. Researched event handling in Vue, specifically how to attach listeners and work with ClipboardEvent.

## Other improvements
- while testing app flow found inconsistence in showing "Not logged in? Login" message on the main page since the auth is handled by middleware now and user shouldn't be on this page without being not logged in; updated logic to show current login username and give option to relogin under right one
- During testing, I noticed inconsistencies in displaying the “Not logged in? Login” message on the main page, as the auth flow is now managed by middleware. Updated the logic to show the current username if logged in and added a “Wrong user?” option for relogin.
- Applied similar Tailwind CSS styles to the login form for a consistency.
