import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import {
  noteGetReducer,
  noteListReducer,
  noteCreateReducer,
  noteUpdateReducer,
  noteDeleteReducer,
  shareNoteReducer,
  isShareReducer,
} from "./reducers/noteReducers";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userRegister: { userInfo: userInfoFromStorage },
};
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteGet: noteGetReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
  shareNote: shareNoteReducer,
  isShare: isShareReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
