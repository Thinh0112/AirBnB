import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AppstoreOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./adminLayout.css";
const { Header, Sider, Content } = Layout;

export default function AdminLayout(props) {
  const { Component, propsRoute } = props;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider theme="light" collapsible collapsed={collapsed}>
        <NavLink to="/" className="py-3 block" style={{ color: "#ff385c" }}>
          <div className="flex items-center justify-center">
            <i className="fab fa-airbnb mr-2 text-4xl"></i>
            <p className="text-2xl font-bold">airbnb</p>
          </div>
        </NavLink>
        <Menu
          style={{ maginTop: 0 }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <NavLink to="/admin/rooms">Room list</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <NavLink to="/admin/user">User list</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Component {...propsRoute} />
        </Content>
      </Layout>
    </Layout>
  );
}
