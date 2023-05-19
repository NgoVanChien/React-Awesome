import { PayloadAction, createAction, createReducer, current, nanoid, createSlice } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: [],
  editingPost: null
}

// export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
//   return {
//     payload: {
//       ...post,
//       id: dnanoid()
//     }
//   }
// })

// export const deletePost = createAction<string>('blog/deletePost')
// export const startEditingPost = createAction<string>('/blog/startEditingPost')
// export const cancelEditingPost = createAction('/blog/cancelEditingPost')
// export const finishEditingPost = createAction<Post>('/blog/finishEditingPost')

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload
        state.postList.push(post)
      },
      // prepare callback sẽ cung cấp ID cho Post không có Id
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  },
  extraReducers(builder) {
    builder
      .addCase('blog/getPostLishSuccess', (state, action: any) => {
        state.postList = action.payload
      })
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {
          console.log(current(state))
        }
      )
      .addDefaultCase((state, action) => {
        // console.log(`action type: ${action.type}`, current(state))
      })
    // `extraReducers` cũng giống `reducers` nhưng nó sẽ không generate ra actions. `extraReducers` cho phép dùng một số tính năng như `addMatcher` hay `addDefaultCase`
  }
})

// export action được generate ra từ slice
export const { addPost, cancelEditingPost, deletePost, finishEditingPost, startEditingPost } = blogSlice.actions
// export reducer được generate ra từ slice
const blogReducer = blogSlice.reducer

export default blogReducer

// const blogReducer = createReducer(initialState, (buider) => {
//   buider
//     .addCase(addPost, (state, action) => {
//       // immmerjs
//       // immerrjs giúp mutate 1 state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     })
//     .addCase(deletePost, (state, action) => {
//       console.log('before delete', current(state))
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//       console.log('after delete', current(state))
//     })
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     })
//     .addCase(cancelEditingPost, (state) => {
//       state.editingPost = null
//     })
//     .addCase(finishEditingPost, (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       state.editingPost = null
//     })
//     .addMatcher(
//       (action) => action.type.includes('cancel'),
//       (state, action) => {
//         console.log(current(state))
//       }
//     )
//   // // addMatcher cho phép chúng ta thêm "matcher function"
//   //   // nếu "matcher function" return true thì nó sẽ nhảy vào case này
//   //   .addMatcher(isActionWithNumberPayload, (state, action) => {})
//   //   // nếu muốn thêm default case khi không match case nào cả
//   //   // thì dùng addDefaultCase
//   //   >>.addDefaultCase((state, action) => {});
// })

// const blogReducer = createReducer(
//   initialState,
//   {
//     [addPost.type]: (state, action: PayloadAction<Post>) => {
//       // immmerjs
//       // immerrjs giúp mutate 1 state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     },
//     [deletePost.type]: (state, action) => {
//       console.log('before delete', current(state))

//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//       console.log('after delete', current(state))
//     },
//     [startEditingPost.type]: (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     },
//     [cancelEditingPost.type]: (state) => {
//       state.editingPost = null
//     },

//     [finishEditingPost.type]: (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       state.editingPost = null
//     }
//   },
//   [
//     {
//       matcher: ((action: any) => action.type.includes('cancel')) as any,
//       reducer(state, action) {
//         console.log(current(state))
//       }
//     }
//   ],
//   (state) => {
//     console.log(state)
//   }
// )

// export default blogReducer
