import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

const store = configureStore({
	reducer: {
		songs: songsReducer,
		movies: moviesReducer,
	},
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };

/* console.log(store);

const startingState = store.getState();
console.log(startingState);

// store.dispatch({
// 	type: 'song/addSong',
// 	payload: 'Song!',
// });
store.dispatch(songsSlice.actions.addSong('Some Song!')); // type and payload(as argument) using action-creators

const finalState = store.getState();
console.log(JSON.stringify(finalState)); */
