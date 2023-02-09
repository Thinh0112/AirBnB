import { xthucNguoiDungService } from "../../services/XacThucNguoiDungService";
import { DANG_NHAP_ACTION } from "../type_action/XacThucNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await xthucNguoiDungService.dangNhap(thongTinDangNhap);
      console.log("result", result);
      alert("ĐĂNG NHẬP THÀNH CÔNG");
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });
        history.push("/");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
