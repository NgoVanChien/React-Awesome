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

const blogReducer = createReducer(initialState, (buider) => {
  buider.addCase(addPost, (state, action) => {
    // immmerjs
    // immerrjs giúp mutate 1 state an toàn
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
