import React from "react";
import { Button, Modal, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useStatus } from "../../hooks";

import "../../styles/Status.css";

function ModalDeleteStatus(props) {
  const { Title } = Typography;

  const { handleDeleteStatus} = useStatus();

  const { isOpen, cancelModalDelete, itemDel } = props;
  const handleCancel = () => {
    cancelModalDelete();
  };

  const DeleteStatus = () => {
    handleDeleteStatus(itemDel._id);
    handleCancel();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            DeleteStatus();
          }}
        > Delete
        </Button>,
      ]}
    >
      <div className="modalDel">
        <WarningOutlined className="icon-warning" />
        <Title level={2} style={{ color: "red", marginBottom: "8%" }}>
          Bạn có muốn xoá không ?
        </Title>
      </div>
      <div>
        <Title level={4} style={{marginBottom: '5%'}}>
          Bạn có chắc chắn muốn xoá
          <span style={{ color: "red" }}> "{itemDel?.status}" </span> không ?
        </Title>
      </div>
    </Modal>
  );
}

export default ModalDeleteStatus;
