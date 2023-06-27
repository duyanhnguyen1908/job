import React, { useEffect, useState } from "react";
import { Button, Col, Input, Modal, Row, Typography } from "antd";

import { useStatus } from "../../hooks";

function ModalCreateStatus(props) {
  const { Title } = Typography;

  const { handleCreateStatus, handleUpdateStatus } = useStatus();

  const [ status, setStatusUpdate] = useState();

  const { isOpen, cancelModalCreate, itemUpdate } = props;

  const handleCancel = () => {
    cancelModalCreate();
    setStatusUpdate(itemUpdate?.name);
  };

  const createStatus = () => {
    handleCreateStatus({ status: status });
    setStatusUpdate("");
    handleCancel();
  };

  const updateStatus = () => {
    handleUpdateStatus({ id: itemUpdate._id, status });
    setStatusUpdate("");
    handleCancel();
  };

  useEffect(() => {
    setStatusUpdate(itemUpdate?.status);
  }, [itemUpdate]);

  const titleColor = itemUpdate ? "#1677ff" : "green";
  const submit = itemUpdate ? "#1677ff" : "green";

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          style={{ backgroundColor: submit, color: "white" }}
          onClick={() => {
            if (itemUpdate) {
              updateStatus();
            } else {
              createStatus();
            }
          }}
        > Submit
        </Button>,
      ]}
    >
      <div className="modalBackground">
        <Title level={2} style={{ color: titleColor, marginBottom: "8%" }}>
          {itemUpdate ? "Sửa Trạng Thái" : "Thêm Trạng Thái"}
        </Title>
        <Row>
          <Col span={8}>
            <Title level={4}>Tên trạng thái:</Title>
          </Col>
          <Col span={16}>
            <Input
              type="text"
              value={status}
              onChange={(e) => {
                setStatusUpdate(e.target.value);
              }}
            />
          </Col>
        </Row>
      </div>
    </Modal>
  );
}

export default ModalCreateStatus;
