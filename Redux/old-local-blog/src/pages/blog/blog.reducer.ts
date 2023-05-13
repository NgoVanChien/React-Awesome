import { createAction, createReducer } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initialPostList
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')

const blogReducer = createReducer(initialState, (buider) => {
  buider
    .addCase(addPost, (state, action) => {
      // immmerjs
      // immerrjs giúp mutate 1 state an toàn
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex > -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
})

export default blogReducer
