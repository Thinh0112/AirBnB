import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useState } from "react";
import { DOMAIN, USER_LOGIN } from "../../util/settings/config";
import axios from "axios";
import UploadImageDemo from "../Admin/ManagerRooms/UploadImageRoom/UploadImageDemo";

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.XacThucNguoiDungReducer);

  let user = {};
  if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
  }
  console.log({ userLogin });

  const [imgSrc, setImgSrc] = useState("");
  const handleChangeFile = (e) => {
    // Lấy file ra từ event
    let file = e.target.files[0];
    // Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target.result);
      setImgSrc(e.target.result);
    };
    console.log("file", file);
  };

  const dispatch = useDispatch();
  // let ids = props.match.params;
  console.log("userLogin", userLogin);
  let { id } = props.match.params;
  useEffect(() => {
    // Lấy thông tin param từ url

    console.log("id", id);
    const action = layThongTinChiTietNguoiDungAction(id);
    dispatch(action);
  }, []);

  const handleApi = () => {
    const url = DOMAIN + "/api/users/upload-avatar";
    console.log("url", url);
    const formData = new FormData();
    formData.append("image", imgSrc);
    console.log("formData", formData.get("image"));
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container flex mx-auto py-10 px-20">
      <div className="basis-1/3 border-solid border-2 rounded-xl border-slate-100 py-5 px-5 mr-14">
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full text-center"
            src={imgSrc === "" ? user.avatar : imgSrc}
            alt="..."
            style={{ width: 130, height: 130 }}
          />

          <div className="mt-3">
            {/* <input
              className="hidden"
              type="file"
              id="file"
              onChange={handleChangeFile}
              accept="image/*"
            />
            <label
              className="underline cursor-pointer font-semibold"
              htmlFor="file"
              onClick={handleApi}
            >
              Cập nhật hình ảnh
            </label> */}
            <UploadImageDemo id={id} />
          </div>
        </div>
        <div className="mt-10">
          <i className="fa-solid fa-id-card text-xl"></i>
          <p className="text-xl font-bold mb-2 mt-3">Xác minh danh tính</p>
          <p className="text-lg mb-7">
            Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
          </p>
          <span className="text-lg font-semibold py-3 px-7 border-solid border-2 border-black rounded-xl">
            Nhận huy hiệu
          </span>
          <hr className="mt-12 mb-8" />
          <p className="text-2xl font-bold">{user.name} đã xác nhận</p>
          <i className="fa-solid fa-check font-extrabold"></i>
          <span className="ml-3 text-lg mb-7">Số điện thoại</span>
        </div>
      </div>
      <div className="basis-2/3 px-5">
        <p className="text-4xl font-semibold mb-3">
          Xin chào, tôi là {user.name}
        </p>
        <p className="text-sm text-slate-500">Bắt đầu tham gia vào 2022</p>
        <p className="underline font-semibold">Chỉnh sửa hồ sơ</p>
        <div className="mt-10">
          <i className="fa-solid fa-star mr-2"></i>
          <span className="text-lg font-semibold">0 đánh giá</span>
        </div>
        <hr className="mt-8 mb-8" />
        <p className="text-black font-semibold underline">Đánh giá của bạn</p>
        <hr className="mt-8" />
      </div>
    </div>
  );
}
