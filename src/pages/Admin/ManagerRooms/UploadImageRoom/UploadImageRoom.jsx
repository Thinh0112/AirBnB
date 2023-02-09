import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatHinhAnhPhongAction,
  layThongTinChiTietPhong,
} from "../../../../redux/actions/QuanLyPhongAction";

export default function UploadImageRoom(props) {
  let { id } = props.match.params;
  useEffect(() => {
    dispatch(layThongTinChiTietPhong(id));
  }, []);
  const { chiTietPhong } = useSelector((state) => state.QuanLyPhongReducer);

  console.log(chiTietPhong?.image);
  const [imgSrc, setImgSrc] = useState(chiTietPhong?.image);

  const dispatch = useDispatch();
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    dispatch(capNhatHinhAnhPhongAction(id, file));
  };

  return (
    <div>
      <img src={imgSrc} alt="hình ảnh" />
      <input type="file" onChange={handleChangeFile} />
    </div>
  );
}
