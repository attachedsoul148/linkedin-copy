import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostAuthorType } from './../components/types'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: null as null | PostAuthorType,
  },
  reducers: {
    login: (state, action: PayloadAction<PostAuthorType>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions
