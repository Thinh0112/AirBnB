import {
  SET_CHI_TIET_PHONG,
  SET_DANH_SACH_PHONG_FILTER,
} from "../type_action/QuanLyPhongType";
import { SET_DANH_SACH_PHONG } from "../type_action/QuanLyPhongType";

const stateDefault = {
  arrRoom: [],
  arrRoomDefault: [],
  chiTietPhong: {},
  thongTinDatPhong: {},
};

export const QuanLyPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHONG: {
      state.arrRoom = action.arrRoom;
      state.arrRoomDefault = state.arrRoom;
      return { ...state };
    }

    case SET_CHI_TIET_PHONG: {
      state.chiTietPhong = action.roomDetail;
      return { ...state };
    }
    case SET_DANH_SACH_PHONG_FILTER: {
      let keyword = document.getElementById("location").value;
      console.log({ keyword });
      state.arrRoom = state.arrRoomDefault.filter((room) => {
        return room.locationId?.province.includes(keyword);
      });
      return { ...state };
    }
    default:
      return { ...state };
  }
};
