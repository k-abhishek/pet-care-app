import { configureStore } from '@reduxjs/toolkit';
import appSlice from './userSlice';
import {combineReducers} from 'redux';

export const store = configureStore({
  reducer: combineReducers({ appSlice, })
});
