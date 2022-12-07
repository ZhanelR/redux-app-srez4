//это по сути редюсер (отвечает за создание стора). Через configureStore создала стор

//Он принимает текущ сост state и объект состояния action, обрабатывает запросы на изменения 

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../slices/postsSlice';
import usersReducer from '../slices/usersSlice';
import photosReducer from "../slices/photosSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    photos: photosReducer,
  },
});

