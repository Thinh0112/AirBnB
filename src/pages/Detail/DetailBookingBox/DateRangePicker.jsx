import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function DateRangePicker() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div>
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
      {/* {checkInDate && checkOutDate && (
        <div className="summary">
          <p>
            You book a hotel from {(checkOutDate.getDate() - checkInDate.getDate())} day
          </p>
        </div>
      )} */}
    </div>
  );
}
