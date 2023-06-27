import React from "react";
import { Avatar, Layout, Typography, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import "../styles/Sidebar.css";

const { Sider } = Layout;

const { Title } = Typography;

function Sidebar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItem = [
    {
      path: "/job",
      name: "Quản lý công việc",
    },
    {
      path: "/status",
      name: "Trạng thái",
    },
  ];
  return (
    <Layout>
      <div className="container">
        <Sider style={{ background: colorBgContainer }}>
          <div className="img-container">
            <Avatar
              size={100}
              icon={<UserOutlined />}
              style={{ backgroundColor: "#87d068", marginBottom: "10px" }}
            ></Avatar>
            <Title level={4}>Thanh Tam</Title>
          </div>
          <div className="sidebar">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <div className="sign">
            <Title level={5}>by Thanh Tam</Title>
          </div>
        </Sider>
      </div>
      
      <Outlet />

    </Layout>
    
  );
}

export default Sidebar;
