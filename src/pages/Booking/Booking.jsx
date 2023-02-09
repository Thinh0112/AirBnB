import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Booking(props) {
  const thongTinDatPhong = useSelector(
    (state) => state.QuanLyPhongReducer.thongTinDatPhong
  );

  console.log({ thongTinDatPhong });
  return (
    <div>
      <div className="border-b px-10">
        <Header />
      </div>
      <div className="container mb-24">
        <div className="text-3xl font-semibold pt-16 pb-8">
          Yêu cầu đặt phòng/đặt chỗ • Airbnb
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="border-b">
              <div className="pb-6 text-2xl font-semibold">
                Chuyến đi của bạn
              </div>
              <div className="flex justify-between items-center pb-6">
                <div className="text-base">
                  <div className="font-semibold mb-2">Ngày</div>
                  <div>Ngày 01 - Ngày 06 tháng 7</div>
                </div>
                <button className="text-base underline font-semibold">
                  Chỉnh sửa
                </button>
              </div>
              <div className="flex justify-between items-center pb-6 mb-2">
                <div className="text-base">
                  <div className="font-semibold mb-2">Khách</div>
                  <div>1 khách</div>
                </div>
                <button className="text-base underline font-semibold">
                  Chỉnh sửa
                </button>
              </div>
            </div>
            <div className="text-xl pt-8">
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 px-8 rounded-lg">
                Xác nhận và thanh toán • Airbnb
              </button>
            </div>
          </div>

          <div className="col-span-1 ml-24">
            <div className="border rounded-xl p-6">
              <div className="flex pb-6 border-b">
                <div style={{ width: "124px", height: "106px" }}>
                  <img
                    className="rounded-lg w-full h-full"
                    src="https://airbnb.cybersoft.edu.vn/public/images/room/1651294075332_download (1).jpg"
                    alt=""
                  />
                </div>

                <div className="pl-3">
                  <div>NAME</div>
                </div>
              </div>

              <div className="border-b">
                <div className="py-6 text-2xl font-semibold">Chi tiết giá</div>
                <div className="text-base flex justify-between">
                  <div>$75,00 x 5 đêm </div>
                  <div>$375,00</div>
                </div>
                <div className="text-base flex justify-between mt-4 mb-6">
                  <div className="underline">Phí dịch vụ</div>
                  <div>$58,23</div>
                </div>
              </div>

              <div className="flex text-base justify-between font-semibold mt-6">
                <div className="underline">Tổng (USD)</div>
                <div>$433,23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
