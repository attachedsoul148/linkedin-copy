import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/userSlice'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: { userReducer },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

const state = store.getState()
export const useOwnSelector: TypedUseSelectorHook<typeof state> = useSelector
export const useOwnDispatch: () => typeof store.dispatch = useDispatch
