import React from "react";
import { Button, Modal, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useJob } from "../../hooks";
import "../../styles/Job.css";

function ModalDeleteJob(props) {
  const { Title } = Typography;

  const { handleDeleteJob } = useJob();

  const { isOpen, cancelModalDelete, itemDel } = props;
  const handleCancel = () => {
    cancelModalDelete();
  };

  const DeleteJob = () => {
    handleDeleteJob(itemDel._id);
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
            DeleteJob();
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
          <span style={{ color: "red" }}> "{itemDel?.name}" </span> không ?
        </Title>
      </div>
    </Modal>
  );
}

export default ModalDeleteJob;
