import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import adminPanelTrest from './adminPanelTrest/adminPanelTrest.reducer';
import userReducer from './user/user.reducer';
import themeReducer from './themes/theme.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['organizations']
}

const rootReducer = combineReducers({
  adminPanel: adminPanelTrest,
  user: userReducer,
  theme: themeReducer
});

export default persistReducer(persistConfig, rootReducer);