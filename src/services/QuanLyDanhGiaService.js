import { baseService } from "./baseService";

export class QuanLyDanhGiaService extends baseService {
  constructor() {
    super();
  }

  layDanhSachDanhGia = (id) => {
    return this.get(`api/reviews/byRoom?roomId=${id}`);
  };
}

export const qlyDanhGiaService = new QuanLyDanhGiaService();
