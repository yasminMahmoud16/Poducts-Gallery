import { configureStore } from '@reduxjs/toolkit'
import  themeReducer  from './Slices/theme.js'
export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})