import {
  SET_DANH_SACH_VI_TRI,
  SET_THONG_TIN_VI_TRI,
} from "../type_action/QuanLyViTriType";

const stateDefault = {
  arrViTri: [],
  thongTinViTri: {},
};

export const QuanLyViTriReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_VI_TRI: {
      state.arrViTri = action.arrViTri;
      return { ...state };
    }
    case SET_THONG_TIN_VI_TRI: {
      state.thongTinViTri = action.locationDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
