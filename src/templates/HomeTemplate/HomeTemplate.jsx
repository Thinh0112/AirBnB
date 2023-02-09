import React from "react";
import { Route } from "react-router";
import FooterLayout from "./FooterLayout/FooterLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderLayout />
            <hr />
            <Component {...propsRoute}></Component>
            <FooterLayout></FooterLayout>
          </div>
        );
      }}
    ></Route>
  );
}
