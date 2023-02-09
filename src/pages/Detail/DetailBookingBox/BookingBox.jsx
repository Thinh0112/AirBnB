import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { datPhongAction } from "../../../redux/actions/QuanLyPhongAction";
import { ThongTinDatPhong } from "../../../_core/models/ThongTinDatPhong";

export function BookingBox(props) {
  const { chiTietPhong, locationId, id } = props;

  const dispatch = useDispatch();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const differenceDate = (d1, d2) => {
    return Math.floor((d2?.getTime() - d1?.getTime()) / (24 * 60 * 60 * 1000));
  };

  const totalPrice =
    chiTietPhong.price * differenceDate(checkInDate, checkOutDate);
  return (
    <div className="mt-12 p-6 border border-solid rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-semibold">
            {chiTietPhong.price?.toLocaleString("de-DE")} đ
          </span>
          <span className="text-base">/đêm</span>
        </div>
        <div>
          <i className="fa fa-star"></i>
          <span className="font-semibold"> 4,95 · </span>
          <span
            className="underline font-semibold"
            style={{ color: "#717171" }}
          >
            {locationId?.valueate} đánh giá
          </span>
        </div>
      </div>
      <div className="mb-4 ">
        <div className="w-full border border-black rounded-xl">
          <div className="border-b-2 border-gray-400">
            {/* DateRangePicker */}
            <div className="flex justify-center items-center ">
              <div className="w-1/2 text-left p-3 border-r">
                <label className="font-semibold text-xs">Nhận phòng</label>
                <DatePicker
                  className="outline-0 text-base w-full"
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
              </div>
              <div className="w-1/2 text-left p-3">
                <label className="font-semibold text-xs">Trả phòng</label>
                <DatePicker
                  className="outline-0 text-base w-full"
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </div>
            </div>
          </div>
          <div>
            <select
              defaultValue={"1 Khách"}
              className="rounded-xl py-6 text-gray-900 text-base w-full p-2.5 "
            >
              <option value="1">1 Khách</option>
              <option value="2">2 Khách</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const thongTinDatPhong = new ThongTinDatPhong();
          thongTinDatPhong.roomId = props.id;
          thongTinDatPhong.checkIn =
            moment(checkInDate).format("YYYY-MM-DDTHH:mm:ss.sss") + "Z";
          thongTinDatPhong.checkOut =
            moment(checkOutDate).format("YYYY-MM-DDTHH:mm:ss.sss") + "Z";
          console.log({ thongTinDatPhong });
          dispatch(datPhongAction(thongTinDatPhong));
        }}
        className="bg-rose-500 hover:bg-rose-600 text-white w-full font-semibold text-base"
        style={{ padding: "14px 24px", borderRadius: "8px" }}
      >
        Đặt phòng
      </button>

      <div className="mt-4 text-center">Bạn vẫn chưa bị trừ tiền</div>

      {checkInDate && checkOutDate && (
        <div className="mt-6 text-base">
          <div className="flex justify-between">
            <div className="underline">
              {chiTietPhong.price?.toLocaleString("de-DE")} đ x{" "}
              <span>{differenceDate(checkInDate, checkOutDate)}</span> đêm
            </div>
            <div>{totalPrice.toLocaleString("de-DE")} đ</div>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="underline">Phí dịch vụ</div>
            <div>{(totalPrice * 0.1).toLocaleString("de-DE")} đ</div>
          </div>
          <div
            className="mt-6 pt-6 font-semibold text-base flex justify-between"
            style={{ borderTop: "1px solid rgb(221, 221, 221)" }}
          >
            <div>Tổng tiền</div>
            <div>
              {(totalPrice + totalPrice * 0.1).toLocaleString("de-DE")} đ
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
