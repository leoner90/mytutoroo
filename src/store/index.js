import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services'
import contactsSlice from './slices/contacts'
import sendMailSlice from './slices/sendMail'

export const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   immutableCheck: { warnAfter: 128 },
  //   serializableCheck: { warnAfter: 128 },
  // }),
  reducer: {
    [api.reducerPath]: api.reducer,
    contacts: contactsSlice,
    sendMail: sendMailSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
    
  ],
})

setupListeners(store.dispatch)

export default store;

 