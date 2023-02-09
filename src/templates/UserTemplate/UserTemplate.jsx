import React from "react";
import { Route } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function UserTemplate(props) {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <div className="border-b px-10 ">
              <Header />
            </div>
            <div className="pt-8">
              <Component {...propsRoute} />
            </div>
            <Footer />
          </div>
        );
      }}
    ></Route>
  );
}
