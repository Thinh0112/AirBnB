import { qlyViTriService } from "../../services/QuanLyViTriService";
import {
  SET_DANH_SACH_VI_TRI,
  SET_THONG_TIN_VI_TRI,
} from "../type_action/QuanLyViTriType";

export const layDanhSachViTriAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.layDanhSachViTri();
      // console.log({ result });
      dispatch({
        type: SET_DANH_SACH_VI_TRI,
        arrViTri: result.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layThongTinViTriAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.layThongTinViTri(id);
      // console.log("result", result);
      dispatch({
        type: SET_THONG_TIN_VI_TRI,
        locationDetail: result.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
