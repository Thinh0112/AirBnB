import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu } from "antd";
import { SET_DANH_SACH_PHONG_FILTER } from "../../../redux/type_action/QuanLyPhongType";
import { NavLink } from "react-router-dom";

import { layDanhSachViTriAction } from "../../../redux/actions/QuanLyViTriAction";
import { ACESSTOKEN, USER_LOGIN } from "../../../util/settings/config";

export default function HeaderLayout() {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.XacThucNguoiDungReducer);

  const findLocation = () => {
    const action = {
      type: SET_DANH_SACH_PHONG_FILTER,
    };
    dispatch(action);
  };

  const { arrViTri } = useSelector((state) => state.QuanLyViTriReducer);
  const dispatch1 = useDispatch();
  useEffect(() => {
    dispatch1(layDanhSachViTriAction());
  }, []);

  const menuDefault = (
    <Menu
      items={[
        { key: "1", label: <NavLink to="/login">Login</NavLink> },
        { key: "2", label: <NavLink to="/register">Register</NavLink> },
      ]}
    />
  );

  let user = {};
  if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
  }
  console.log("name", user.name);

  let menu = menuDefault;

  const menuClient = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACESSTOKEN);
                window.location.reload();
              }}
            >
              Logout
            </button>
          ),
        },
        { key: "2", label: <NavLink to="/register">Register</NavLink> },
        {
          key: "3",
          label: <NavLink to={`/profile/${user._id}`}>Account</NavLink>,
        },
      ]}
    />
  );

  const menuAdmin = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACESSTOKEN);
                window.location.reload();
              }}
            >
              Logout
            </button>
          ),
        },
        { key: "2", label: <NavLink to="/register">Register</NavLink> },
        {
          key: "3",
          label: <NavLink to={`/profile/${user._id}`}>Account</NavLink>,
        },
        {
          key: "4",
          label: <NavLink to="/admin">Manager</NavLink>,
        },
      ]}
    />
  );

  if (user.type === "CLIENT") {
    menu = menuClient;
  } else if (user.type === "ADMIN") {
    menu = menuAdmin;
  }

  return (
    <header>
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* logo */}
          <NavLink to="/" className="logo" style={{ color: "#ff385c" }}>
            <div className="flex justify-center items-center ">
              <i className="fab fa-airbnb mr-2 text-4xl"></i>
              <div className="text-2xl font-bold">airbnb</div>
            </div>
          </NavLink>

          {/*  */}
          <div className="search-tabpanel flex justify-center items-center">
            <div className="py-3.5 px-6">
              <label htmlFor="">
                <div className="text-xs font-semibold">Địa điểm</div>
                <select
                  className="appearance-none focus:outline-none"
                  id="location"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled hidden>
                    Bạn sắp đi đâu...
                  </option>
                  {arrViTri.map((viTri, index) => {
                    return (
                      <option key={index} value={viTri.province}>
                        {viTri.province}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="h-8"></div>
            <div className="py-3.5 px-6">
              <div className="text-xs font-semibold">Thời gian</div>
              <div>1 tuần vào</div>
            </div>
            <div className="h-8"></div>
            <div className="flex justify-center items-center ">
              <div className="py-3.5 px-6">
                <div className="text-xs font-semibold">Khách</div>
                <div>Thêm khách</div>
              </div>
              <div className="pr-2.5">
                <button onClick={findLocation} className="btn btn-airbnb">
                  <i className="fa fa-search"></i>
                  <span className="pl-2">Tìm kiếm</span>
                </button>
              </div>
            </div>
          </div>

          {/* trở thành chủ nhà */}
          <div className="flex justify-center items-center">
            <div className="p-3">
              <div className="text-sm font-semibold">Trở thành chủ nhà</div>
            </div>
            <div className="p-3">
              <i className="fa fa-globe"></i>
            </div>
            <div className="user py-1.5 pr-1.5 pl-3">
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <button
                  className="flex justify-center items-center"
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <i className="fa fa-bars mr-3"></i>
                  <i className="fa fa-user-circle text-3xl"></i>
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
