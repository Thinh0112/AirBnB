import React, { useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachViTriAction } from "../../redux/actions/QuanLyViTriAction";

export default function SelectLocation() {
  const { arrViTri } = useSelector((state) => state.QuanLyViTriReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachViTriAction());
  }, []);
  return (
    <Select showArrow={false} bordered={false} placeholder="Bạn sắp đi đâu">
      {arrViTri.map((viTri, index) => {
        return (
          <option key={index} value={viTri.province}>
            {viTri.province}
          </option>
        );
      })}
    </Select>
  );
}
