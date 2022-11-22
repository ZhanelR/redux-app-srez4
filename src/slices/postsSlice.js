import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
  }
)


const initialState = {
  start: 0,
  end: 3,
  items: [],
  showItems: [],
  currentPost: {},
  status: 'loading',
  isSmallCards: true,
  isShowInfoPopup: false,
  isShowAddPopup: false,
  isShowEditPopup: false,
  isShowRemovePopup: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {

    changeSizeCard(state) {
      state.isSmallCards = !state.isSmallCards
    },

    openInfoPopup: (state, action) => {
      state.isShowInfoPopup = true
      state.currentPost = state.items.find(item => item.id === action.payload)
    },

    closeInfoPopup: (state) => {
      state.isShowInfoPopup = false
    },

    openEditPopup: (state, action) => {
      state.currentPost = state.items.find(item => item.id === action.payload)
      state.isShowEditPopup = true
    },

    closeEditPopup: (state) => {
      state.isShowEditPopup = false
    },

    openAddPopup: (state) => {
      state.isShowAddPopup = true
    },

    closeAddPopup: (state) => {
      state.isShowAddPopup = false
    },

    openRemovePopup: (state, action) => {
      state.isShowRemovePopup = true
      state.currentPost = state.showItems.find(item => item.id === action.payload)
    },

    closeRemovePopup: (state) => {
      state.isShowRemovePopup = false
    },

    addItem: (state, action) => {
      if (action.payload.title === '' || action.payload.body === '') {
        alert('CardPost did not create! You need to write something in fields')
      } else {
        state.showItems.push(action.payload)
        state.isShowAddPopup = false
      }
    },

    updateItem: (state, action) => {
      state.currentPost = state.showItems.find(item => item.id === action.payload.id)
      state.currentPost.title = action.payload.title
      state.currentPost.body = action.payload.body
    },

    removeItem: (state) => {
      state.showItems = state.showItems.filter(item => item.id !== state.currentPost.id)
      state.isShowRemovePopup = false
    },

    addThreeShowItems: (state) => {
      //console.log(state.end)
      if (state.end <= 100) {
        state.start += 3
        state.end += 3
        const nextThreeItems = state.items.slice(state.start, state.end)
        state.showItems = state.showItems.concat(nextThreeItems)
      }
    },

    showFirstPosts: (state) => {
      state.showItems = state.items.slice(state.start, state.end)
    }
  },
  extraReducers: {

    [fetchPosts.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },

    [fetchPosts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
      console.log(fetchPosts);
    },

    [fetchPosts.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  }
})

export const {
  changeSizeCard,
  showFirstPosts,
  addThreeShowItems,
  openInfoPopup,
  openEditPopup,
  openAddPopup,
  openRemovePopup,
  closeInfoPopup,
  closeEditPopup,
  closeAddPopup,
  closeRemovePopup,
  addItem,
  updateItem,
  removeItem,

} = postsSlice.actions

export default postsSlice.reducer


