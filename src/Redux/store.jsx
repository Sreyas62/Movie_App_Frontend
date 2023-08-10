import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/user.reducer';
import { movieReducer } from './movies/movie.reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  movieReducer: movieReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store using configureStore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

// Persistor remains the same   
export const persistor = persistStore(store);


