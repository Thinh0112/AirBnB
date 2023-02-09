import React from "react";
import ElevatorIcon from "@mui/icons-material/Elevator";
import HotTubIcon from "@mui/icons-material/HotTub";
import PoolIcon from "@mui/icons-material/Pool";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import KitchenIcon from "@mui/icons-material/Kitchen";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";

export default function DetailOffer(props) {
  const { chiTietPhong } = props;
  // console.log({ chiTietPhong });
  const arrTienNghi = [
    {
      name: "Thang máy",
      id: "elevator",
      icon: <ElevatorIcon fontSize="large" />,
    },
    {
      name: "Bồn tắm nước nóng",
      id: "hotTub",
      icon: <HotTubIcon fontSize="large" />,
    },
    { name: "Hồ bơi", id: "pool", icon: <PoolIcon fontSize="large" /> },
    {
      name: "Lò sưởi trong nhà",
      id: "indoorFireplace",
      icon: <FireplaceIcon fontSize="large" />,
    },
    {
      name: "Máy sấy quần áo",
      id: "dryer",
      icon: <LocalLaundryServiceIcon fontSize="large" />,
    },
    { name: "Phòng tập gym", id: "gym", icon: <FitnessCenterIcon fontSize="large" /> },
    {
      name: "Bếp",
      id: "kitchen",
      icon: <KitchenIcon fontSize="large" />,
    },
    { name: "Wifi", id: "wifi", icon: <NetworkWifiIcon fontSize="large" /> },
    {
      name: "Máy điều hòa nhiệt độ",
      id: "heating",
      icon: <AcUnitIcon fontSize="large" />,
    },
    {
      name: "Tivi truyền hình cáp",
      id: "cableTV",
      icon: <TvIcon fontSize="large" />,
    },
  ];

  const renderTienNghi = () => {
    return arrTienNghi.map((item, index) => {
      const { id } = item;
      const renderTag = () => {
        return (
          <div key={index} className="flex items-center">
            {item.icon}
            <span className="text-base ml-4">{item.name}</span>
          </div>
        );
      };

      if (chiTietPhong[id]) {
        return renderTag();
      }
    });
  };
  renderTienNghi();

  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold pb-6">
        Nơi này có những gì cho bạn
      </h3>
      <div className="grid grid-cols-2 gap-4">{renderTienNghi()}</div>
    </div>
  );
}
