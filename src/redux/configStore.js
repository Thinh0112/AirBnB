import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyPhongReducer } from "./reducers/QuanLyPhongReducer";
import { QuanLyDanhGiaReducer } from "./reducers/QuanLyDanhGiaReducer";
import { XacThucNguoiDungReducer } from "./reducers/XacThucNguoiDungReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyViTriReducer } from "./reducers/QuanLyViTriReducer";

const rootReducer = combineReducers({
  // noi chua cac state cua ung dung
  QuanLyPhongReducer,
  QuanLyDanhGiaReducer,
  QuanLyNguoiDungReducer,
  QuanLyViTriReducer,
  XacThucNguoiDungReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
