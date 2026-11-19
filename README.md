# Netflix GPT

## Development

Install dependencies with `npm install`, then start the Vite development server:

```sh
npm start
```

Tailwind CSS v4 is integrated through the Vite plugin in `vite.config.mjs` and imported from `src/index.css`.

## Available scripts

- `npm start` starts the Vite development server.
- `npm run build` creates a production build in `dist`.
- `npm test -- --watchAll=false` runs the existing Create React App/Jest tests.

Create a appStore -- configure Store

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'


const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default appStore

userSlice.js -- it contains reducer and actions
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducer: {
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer

Add store to body
    <Provider store={appStore}>
        <Body />
    </Provider>