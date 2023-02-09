import { qlyDanhGiaService } from "../../services/QuanLyDanhGiaService";
import { SET_DANH_SACH_DANH_GIA } from "../type_action/QuanLyDanhGiaType";

export const layDanhSachDanhGiaAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyDanhGiaService.layDanhSachDanhGia(id);
      // console.log("result Danh Gia", result);
      dispatch({
        type: SET_DANH_SACH_DANH_GIA,
        arrDanhGia: result.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
