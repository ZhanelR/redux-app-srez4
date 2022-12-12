import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
  }
)


const initialState = {
  start: 0,
  end: 3,
  items: [],
  showItems: [],
  currentUser: {},
  status: 'loading',
  isSmallCards: true,
  isShowInfoPopup: false,
  isShowAddPopup: false,
  isShowEditPopup: false,
  isShowRemovePopup: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    changeSizeCard(state) {
        state.isSmallCards = !state.isSmallCards
      },
  
      openInfoPopup: (state, action) => {
        state.isShowInfoPopup = true
        state.currentUser = state.items.find(item => item.name === action.payload)
      },
  
      closeInfoPopup: (state) => {
        state.isShowInfoPopup = false
      },
  
      openEditPopup: (state, action) => {
        state.currentUser = state.items.find(item => item.name === action.payload)
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
        state.currentUser = state.showItems.find(item => item.name === action.payload)
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
        state.currentUser = state.showItems.find(item => item.name === action.payload.id)
        state.currentUser.title = action.payload.title
        state.currentUser.body = action.payload.body
      },
  
      removeItem: (state) => {
        state.showItems = state.showItems.filter(item => item.name !== state.currentUser.id)
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

    [fetchUsers.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },

    [fetchUsers.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
      console.log(fetchUsers);
    },

    [fetchUsers.rejected]: (state) => {
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

    
  } = usersSlice.actions
  
  export default usersSlice.reducer



