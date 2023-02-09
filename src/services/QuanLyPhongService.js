import { ThongTinDatPhong } from "../_core/models/ThongTinDatPhong";
import { baseService } from "./baseService";

export class QuanLyPhongService extends baseService {
  constructor() {
    super();
  }
  taoPhongChoThue = (formData) => {
    return this.post(`api/rooms`, formData);
  };
  layDanhSachPhong = () => {
    return this.get(`api/rooms`);
  };

  layThongTinChiTietPhong = (id) => {
    return this.get(`api/rooms/${id}`);
  };

  capNhatThongTinPhong = (id, formData) => {
    return this.put(`api/rooms/${id}`, formData);
  };

  xoaPhongChoThue = (id) => {
    return this.delete(`api/rooms/${id}`);
  };

  datPhong = (thongTinDatPhong = new ThongTinDatPhong()) => {
    return this.post(`api/rooms/booking`, thongTinDatPhong);
  };

  capNhatHinhAnhPhong = (id, fileData) => {
    return this.post(`api/rooms/upload-image/${id}`, fileData);
  };
}

export const qlyPhongService = new QuanLyPhongService();
