import React, { useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { themQuanTriVienAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";
import {
  capNhatNguoiDungAction,
  layThongTinChiTietNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";

export default function CapNhatNguoiDung(props) {
  const { user } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("user", user);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(layThongTinChiTietNguoiDungAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      type: user.type,
    },
    onSubmit: (values) => {
      console.log("values", values);
      let { id } = props.match.params;
      console.log("id", id);
      // Tạo đối tượng formData => Đưa giá trị formik vào formData
      dispatch(capNhatNguoiDungAction(id, values));
    },
  });
  return (
    <Form onSubmitCapture={formik.handleSubmit} className="!ml-5">
      <h1 className="text-xl font-bold mt-5">CẬP NHẬT NGƯỜI DÙNG</h1>
      <Form.Item label="Tên">
        <Input
          name="name"
          style={{ width: 700 }}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label="Email">
        <Input
          name="email"
          style={{ width: 700 }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="phone"
          style={{ width: 700 }}
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input
          name="address"
          style={{ width: 700 }}
          value={formik.values.address}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Chức vụ">
        <Input
          name="type"
          style={{ width: 700 }}
          value={formik.values.type}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <button
        type="submit"
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
      >
        Cập nhật
      </button>
    </Form>
  );
}
