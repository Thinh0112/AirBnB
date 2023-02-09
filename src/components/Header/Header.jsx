import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink to="/" className="py-3 block">
      <div className="logo" style={{ color: "#ff385c" }}>
        <div className="flex items-center ">
          <i className="fab fa-airbnb mr-2 text-4xl"></i>
          <span className="text-2xl font-bold">airbnb</span>
        </div>
      </div>
    </NavLink>
  );
}
