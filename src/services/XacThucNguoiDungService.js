import { baseService } from "./baseService";

export class XacThucNguoiDungService extends baseService {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/auth/login`, thongTinDangNhap);
  };
  dangKyTaiKhoan = (data) => {
    return this.post(`api/auth/register`, data);
  };
}

export const xthucNguoiDungService = new XacThucNguoiDungService();
