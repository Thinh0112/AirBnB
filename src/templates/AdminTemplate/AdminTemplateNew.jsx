import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";
import AdminLayout from "./AdminLayout/AdminLayout";

export default function AdminTemplateNew(props) {
  const { Component, ...restProps } = props;

  const { userLogin } = useSelector((state) => state.XacThucNguoiDungReducer);
  let user = {};
  if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
  }
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC VÀO TRANG NÀY");
    return <Redirect to="/login" />;
  }
  if (user.type !== "ADMIN") {
    alert("BẠN KHÔNG PHẢI ADMIN, NÊN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY");
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <AdminLayout Component={Component} propsRoute={propsRoute} />
          </div>
        );
      }}
    />
  );
}
