/* 

// МОЙ СТАРЫЙ КОД 
// код в reducers  для того, чтобы в пустую строку подтягивался текст 

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // The value we return becomes the `fulfilled` action payload
      return data;
      //то есть, то, что я получу по ссылке вернется как data 
    }
); 

const initialState = {
  text: '',
  status: 'loading',
  start: 0,
  end: 3,
  items: [],
  showItems: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    /* changeText: (state, action) => {
      state.text = action.payload
      //action.payload это данные, которые прокидываю в экшн (Это Hello)

      //метод changeText в состоянии state.text возращ action.payload
      //state - это стор, ему передаю через payload то, что в text 
    },
 */
   /*  showFirstPosts: (state, action) => {
        state.showItems = state.items.slice(state.start, state.end)
    } */
    //код выше: записываю нов состояние showItems, в это состояние из массива state.items отрезаю и передаю кусок от старта до энда
    

 /*    addThreeShowItems: (state) => {
        if (state.end <= 100) {
          state.start += 3
          state.end += 3
          const nextThreeItems = state.items.slice(state.start, state.end)
          state.showItems = state.showItems.concat(nextThreeItems)
        }
      },

    }, 
*/
 /*  extraReducers: { 

    [fetchPosts.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },

    [fetchPosts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },

    [fetchPosts.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  }


})



export const {
  changeText
} = postsSlice.actions
//так как changeText - это экшн, важно записать его именно через точку и экшн, и в postsSlice


export default postsSlice.reducer

export const {
    showFirstPosts, addThreeShowItems
} = postsSlice.actions
//метод changeText в состоянии state.text возвращ action.payload (те данные, которые я отправл в экшн), 


 */