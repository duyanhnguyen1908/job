import React, { useEffect, useState } from "react";
import {Button, Col, Input, Row, Select, Space, Table, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useJob } from "../hooks";
import ModalCreateJob from "../components/ModalJob/CreateJob";
import ModalDeleteJob from "../components/ModalJob/DeleteJob";

import "../styles/Job.css";

const { Title } = Typography;

export default function Status() {
  const { handleSearchJob } = useJob();

  const { listJob, handleGetJob } = useJob();

  const [isVisible, setIsVisible] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const [showDetail, setshowDetail] = useState(false);
 
  const [textSearch, setTextSearch] = useState("");

  const [itemDel, setItemDel] = useState();

  const [itemUpdate, setItemUpdate] = useState()

  const showModalCreate = (record) => {
    setIsVisible(true);
    setItemUpdate(record);
  };

  const cancelModalCreate = () => {
    setIsVisible(false);
  };

  const showModalDelete = (record) => {
    setIsShown(true);
    setItemDel(record);
  };

  const cancelModalDelete = () => {
    setIsShown(false);
  };

  const showModalDetail = () => {
    showDetail(true)
  }

  useEffect(() => {
    handleGetJob();
  }, []);

  const columns = [
    {
      title: "Tên công việc",
      dataIndex: "name",
      key: "name",
      render: (showDetail) => <a>{showDetail}</a>,
    },
    {
      title: "Tiến độ công việc",
      dataIndex: "progress",
      key: "progress",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      align: "center",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button 
            type="primary" 
            icon={<EditOutlined />}
            onClick={() => {
              showModalCreate(record)
            }}
            style={{ cursor: 'pointer'}}
          />

          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => {
              showModalDelete(record);
            }}
            style={{ cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="main">
      <ModalDeleteJob
        isOpen={isShown}
        cancelModalDelete={cancelModalDelete}
        itemDel={itemDel}
      />
      <ModalCreateJob
        isOpen={isVisible}
        cancelModalCreate={cancelModalCreate}
        itemUpdate={itemUpdate}
      />
      <div className="title">
        <Title>Danh sách công việc</Title>
      </div>

      <div className="menu-search">
        <Row>
          <Col span={18}>
            <Row>
              <Col span={18}>
                <Input
                  size="large"
                  placeholder="Nhập để tìm kiếm..."
                  onChange={(e) => {
                    setTextSearch(e.target.value);
                  }}
                />
              </Col>
              <Col span={4} offset={2}>
                <Button
                  size={"large"}
                  style={{ backgroundColor: "orange"}}
                  onClick={() => {
                    handleSearchJob({ name: textSearch });
                  }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={6}>
            <Row>
              <Col span={12}>
                <Button
                  size={"large"}
                  style={{ backgroundColor:  "green", color: "white" }}
                  onClick={() => {
                    showModalCreate();
                  }}
                >
                  Create
                </Button>
              </Col>
              <Col span={10} offset={2}>
                <Select size={"large"}></Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div>
        <Table
          onRow={(record) => {
            return {
              onClick: () => {
                console.log(record);
              },
            };
          }}
          columns={columns}
          dataSource={listJob}
          rowKey={(key) => key._id}
        ></Table>
      </div>
    </div>
  );
}
