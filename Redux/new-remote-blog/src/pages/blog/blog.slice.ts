import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BlogState {
  postId: string
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    cancleEditPost: (state) => {
      state.postId = ''
    }
  }
})

const blogReducer = blogSlice.reducer

export const { startEditPost, cancleEditPost } = blogSlice.actions

export default blogReducer
