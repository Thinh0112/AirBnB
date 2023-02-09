import { ACESSTOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../type_action/XacThucNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
};

export const XacThucNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap.user));
      localStorage.setItem(ACESSTOKEN, thongTinDangNhap.token); // cái token API trả về nó đã là string rồi
      // JSON.stringify nó chuyển qua string 1 lần nữa => nó bị 2 dấu "" token"" nó dư 1 ngoặc kép
      return { ...state, userLogin: thongTinDangNhap.user };
    }
    default:
      return { ...state };
  }
};
