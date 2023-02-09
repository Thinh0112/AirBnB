import React, { useEffect } from "react";
import { Rate, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachDanhGiaAction } from "../../../redux/actions/QuanLyDanhGiaAction";

export default function DetailEvaluate(props) {
  const locationId = props.locationId;
  // console.log({ props });

  const arrDanhGia = useSelector(
    (state) => state.QuanLyDanhGiaReducer.arrDanhGia
  );
  // console.log({ arrDanhGia });

  const dispatch = useDispatch();
  let { id } = props;

  useEffect(() => {
    dispatch(layDanhSachDanhGiaAction(id));
  }, []);

  // let userIdNull = {
  //   name: "User",
  //   avatar:
  //     "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
  // };

  const renderDanhSachBinhLuan = () => {
    return arrDanhGia.map((danhGia, index) => {
      
      return (
        <div className="mb-10" key={index}>
          <div className="flex items-center mb-4">
            <div>
              <Avatar
                style={{ width: 56, height: 56 }}
                src={danhGia.userId?.avatar}
              />
            </div>
            <div className="ml-3">
              <div className="font-semibold text-base">
                {danhGia.userId?.name}
              </div>
              <div className="text-base" style={{ color: "#717171" }}>
                {danhGia.updatedAt}
              </div>
            </div>
          </div>
          <div className="text-base pr-28">
            <span>{danhGia.content}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="py-12">
      <div className="flex items-center font-semibold mb-8">
        <i className="fa fa-star"></i>
        <span className="text-2xl ml-2">
          4,90 · {locationId?.valueate} đánh giá
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="flex justify-between items-center">
          <div className="text-base">Mức độ sạch sẽ</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base">Độ chính xác</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base">Giao tiếp</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base">Vị trí</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base">Nhận phòng</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base">Giá trị</div>
          <div className="mr-28">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">{renderDanhSachBinhLuan()}</div>
    </div>
  );
}
