import { createStore, applyMiddleware, combineReducers } from 'redux';
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

// Apply any enhancers you might need (like Redux DevTools)
const enhancer = applyMiddleware(thunk);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
