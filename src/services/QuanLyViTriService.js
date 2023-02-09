import { baseService } from "./baseService";

export class QuanLyViTriService extends baseService {
  constructor() {
    super();
  }
  layDanhSachViTri = () => {
    return this.get("api/locations");
  };
  layThongTinViTri = (id) => {
    return this.get(`api/locations/${id}`);
  };
}

export const qlyViTriService = new QuanLyViTriService();
