import React from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";

export default function BookingTemplate(props) {
  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("ĐĂNG NHẬP ĐỂ ĐẶT PHÒNG");
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
