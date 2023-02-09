import { SET_DANH_SACH_DANH_GIA } from "../type_action/QuanLyDanhGiaType";

const stateDefault = {
  arrDanhGia: [],
};

export const QuanLyDanhGiaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_DANH_GIA: {
      state.arrDanhGia = action.arrDanhGia;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
