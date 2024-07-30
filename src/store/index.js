import { configureStore } from '@reduxjs/toolkit';
import couterStore from './modules/couterStore';
export default configureStore({
  reducer: {
    couter: couterStore
  },
});