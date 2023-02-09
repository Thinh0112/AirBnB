import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { xthucNguoiDungService } from "../../services/XacThucNguoiDungService";
import { history } from "../../App";
export default function Register() {
  const signupUserSchema = yup.object().shape({
    name: yup.string().required("Trường này không được bỏ trống!"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Trường này không được bỏ trống!"),
    password: yup.string().required("Trường này không được bỏ trống!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Mật khẩu không giống nhau")
      .required("Trường này không được bỏ trống!"),
    phone: yup
      .string()
      .required("Trường này không được bỏ trống!")
      .matches(/^[0-9]+$/)
      .min(10, "Phải đủ 10 số")
      .max(10, "Không vượt quá 10 số"),
    birthday: yup.date().required("Vui lòng chọn ngày sinh!"),
    gender: yup.string().required("Vui lòng chọn giới tính!"),
    address: yup.string().required("Trường này không được bỏ trống!"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    if (
      values.gender === "nam" ||
      values.gender === "nữ" ||
      values.gender === "lgbt"
    ) {
      values.gender = true;
    } else {
      values.gender = false;
    }
    xthucNguoiDungService
      .dangKyTaiKhoan(values)
      .then((res) => {
        console.log({res});
        alert("Đăng ký thành công");
        if(res.status === 200){
          history.push('/login')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">ĐĂNG KÝ</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            birthday: "",
            gender: "",
            address: "",
          }}
          validationSchema={signupUserSchema}
          onSubmit={handleSubmit}
          children={(formikProps) => (
            <Form action="">
              <div className="mt-4">
                <div className="mt-4">
                  <label className="block">
                    Họ tên
                    <label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Họ tên"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="name">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Email
                    <label>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Mật khẩu
                    <label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="password">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Nhập lại mật khẩu
                    <label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="confirmPassword">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Số điện thoại
                    <label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Số điện thoại"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="phone">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Ngày sinh
                    <label>
                      <Field
                        type="date"
                        name="birthday"
                        placeholder="Họ tên"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="birthday">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="gioiTinh"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Giới tính
                  </label>

                  <div>
                    <div className="flex items-center mb-4">
                      <Field
                        id="default-radio-1"
                        type="radio"
                        value="nam"
                        name="gender"
                        onChange={formikProps.handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Nam
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <Field
                        id="default-radio-2"
                        type="radio"
                        value="nữ"
                        name="gender"
                        onChange={formikProps.handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Nữ
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <Field
                        id="default-radio-3"
                        type="radio"
                        value="lgbt"
                        name="gender"
                        onChange={formikProps.handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        LGBT
                      </label>
                    </div>
                    <ErrorMessage name="gender">
                      {(message) => (
                        <span className="text-red-500">{message}</span>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block">
                    Địa chỉ
                    <label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Họ tên"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="address">
                        {(message) => (
                          <span className="text-red-500">{message}</span>
                        )}
                      </ErrorMessage>
                    </label>
                  </label>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Đăng ký
                  </button>
                </div>

                <div className="text-grey-dark mt-6">
                  Đã có tài khoản?
                  <NavLink
                    className="no-underline border-b border-blue text-blue"
                    to="/login"
                  >
                    Log in
                  </NavLink>
                  .
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}
