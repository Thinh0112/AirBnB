import React from "react";
import { NavLink } from "react-router-dom";

export default function Room(props) {
  const { room } = props;
  //   console.log({ room });
  return (
    <div>
      <NavLink to={`/detail/${room._id}`} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            style={{ height: "270px" }}
            src={room.image}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-lg text-gray-700">
          {room.name}, {room.locationId?.province}
        </h3>
        <div>
          <span className="mt-1 text-lg font-medium text-gray-900">
            ${room.price?.toLocaleString('de-DE')} đ
          </span>
          <span className="text-base text-gray-900">/đêm</span>
        </div>
      </NavLink>
    </div>
  );
}
