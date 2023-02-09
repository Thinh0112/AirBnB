import {
  GET_USER_DETAIL,
  GET_USER_LIST,
} from "../type_action/QuanLyNguoiDungType";

const stateDefault = {
  user: {},
  userList: [],
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_DETAIL: {
      state.user = action.user;
      return { ...state };
    }
    case GET_USER_LIST: {
      state.userList = action.userList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
