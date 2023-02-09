import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  layThongTinUser = (id) => {
    return this.get(`api/users/${id}`);
  };
  layDanhSachUser = () => {
    return this.get(`api/users/pagination`);
  };
  themQuanTriVien = (values) => {
    return this.post(`api/users`, values);
  };
  capNhatNguoiDung = (id,values) => {
    return this.put(`api/users/${id}`,values);
  };
  xoaNguoiDung = (id) => {
    return this.delete(`api/users/${id}`);
  };
}
export const qlyNguoiDungService = new QuanLyNguoiDungService();
