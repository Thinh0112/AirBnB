import React from "react";
import { Form, Input } from "antd";
// import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { themQuanTriVienAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";
import { layThongTinChiTietNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";

export default function XemThongTinChiTiet(props) {
  const { user } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("user", user);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(layThongTinChiTietNguoiDungAction(id));
  }, []);

 
  return (
    <Form className="!ml-5">
      <h1 className="text-xl font-bold mt-5">THÔNG TIN CHI TIẾT NGƯỜI DÙNG</h1>
      <Form.Item label="Tên">
        <Input
          name="name"
          style={{ width: 700 }}
          value={user.name}
        
        />
      </Form.Item>

      <Form.Item label="Email">
        <Input
          name="email"
          style={{ width: 700 }}
          value={user.email}
          
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="phone"
          style={{ width: 700 }}
          value={user.phone}
         
        />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input
          name="address"
          style={{ width: 700 }}
          value={user.address}
         
        />
      </Form.Item>
      <Form.Item label="Chức vụ">
        <Input
          name="type"
          style={{ width: 700 }}
          value={user.type}
         
        />
      </Form.Item>
    </Form>
  );
}
