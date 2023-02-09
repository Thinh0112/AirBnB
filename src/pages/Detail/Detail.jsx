import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhong } from "../../redux/actions/QuanLyPhongAction";
import { BookingBox } from "./DetailBookingBox/BookingBox";
import DetailEvaluate from "./DetailEvaluate/DetailEvaluate";
import DetailOffer from "./DetailOffer/DetailOffer";

export default function Detail(props) {
  const chiTietPhong = useSelector(
    (state) => state.QuanLyPhongReducer.chiTietPhong
  );

  const { locationId } = chiTietPhong; // chỗ này là bóc tách phần tử spread operator, coi lại cái này nha

  // console.log(locationId?.image); // chỗ này cần optional channing vì lúc đầu cái chi tiết phòng nó chưa có do đợi lấy từ API về, cái nào mà đợi lấy từ API về thì cho nó cái ? khỏi nó báo lỗi
  // console.log({ chiTietPhong });

  const dispatch = useDispatch();
  let id = props.match.params.id;

  useEffect(() => {
    dispatch(layThongTinChiTietPhong(id));
  }, []);

  return (
    <section className="container">
      {/* header-detail */}
      <div className="header-detail pt-6">
        <h1 className="font-semibold text-3xl">{chiTietPhong.name}</h1>
        <div className="flex justify-between mt-2 text-sm">
          <div className="flex items-center">
            <span className="font-semibold">
              <i className="fa fa-star"></i>
              <span> 5,0 · </span>
              <button>
                <span className="font-semibold underline">
                  {locationId?.valueate} đánh giá
                </span>
              </button>
            </span>

            <span className="mx-2 mr-2">.</span>
            <span className="mr-1">
              <i className="ionicons ion-ribbon-a"></i>
            </span>
            <span>Chủ nhà siêu cấp</span>
            <span className="mx-2 mr-2">.</span>
            <button>
              <span className="font-semibold underline">
                {locationId?.name}, {locationId?.province},{" "}
                {locationId?.country}
              </span>
            </button>
          </div>
          <div className="flex text-base">
            <button className="flex items-center p-2 mr-1">
              <i className="fa fa-share-square mr-2"></i>
              <span className="font-semibold underline">Chia sẻ</span>
            </button>
            <button className="flex items-center p-2 mr-1">
              <i className="ionicons ion-android-favorite-outline mr-2 text-lg"></i>
              <span className="font-semibold underline">Lưu</span>
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div>
        <img className="w-full rounded-2xl" src={chiTietPhong.image} alt="" />
      </div>

      {/* content-detail */}
      <div className="flex justify-between">
        <div className="w-7/12">
          <div className="header-content pt-12 pb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Toàn bộ căn hộ {chiTietPhong.name}
            </h3>
            <div className="text-base">
              <span>{chiTietPhong.guests} khách</span>
              <span> · {chiTietPhong.bedRoom} phòng ngủ</span>
              <span> · {chiTietPhong.bedRoom} giường</span>
              <span> · {chiTietPhong.bath} phòng tắm</span>
            </div>
          </div>
          <hr />
          <div className="py-8">
            <div className="flex items-center text-lg">
              <i className="fa fa-calendar-times "></i>
              <span className="ml-4 font-semibold">
                Hủy miễn phí trong 48 giờ.
              </span>
            </div>
          </div>
          <hr />
          <div className="py-8">
            <img
              className="mb-4"
              style={{ height: "26px" }}
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              alt=""
            />
            <p>
              Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
              hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề
              khác như sự cố trong quá trình nhận phòng.
            </p>
          </div>
          <hr />
          <div className="py-8">
            <p>{chiTietPhong.description}</p>
          </div>
          <hr />
          <DetailOffer chiTietPhong={chiTietPhong} />
        </div>

        {/* Booking box */}
        <div className="w-4/12 ml-2">
          <BookingBox
            chiTietPhong={chiTietPhong}
            locationId={locationId}
            id={id}
          />
        </div>
      </div>
      <hr />

      {/* Đánh giá */}
      <DetailEvaluate locationId={locationId} id={id} />
    </section>
  );
}
