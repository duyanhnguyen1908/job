import React, { useEffect, useState } from "react";
import { Button, Col, Input, Modal, Row, Typography } from "antd";

import { useJob } from "../../hooks";

function ModalCreateJob(props) {
  const { Title } = Typography;

  const { handleCreateJob, handleUpdateJob } = useJob();

  const [ name, setNameUpdate] = useState();

  const { isOpen, cancelModalCreate, itemUpdate } = props;

  const handleCancel = () => {
    cancelModalCreate();
    setNameUpdate(itemUpdate?.name);
  };

  const createJob = () => {
    handleCreateJob({ name: name });
    setNameUpdate("");
    handleCancel();
  };

  const updateJob = () => {
    handleUpdateJob({ id: itemUpdate._id, name });
    setNameUpdate("");
    handleCancel();
  };

  useEffect(() => {
    setNameUpdate(itemUpdate?.name);
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
              updateJob();
            } else {
              createJob();
            }
          }}
        > Submit
        </Button>,
      ]}
    >
      <div className="modalBackground">
        <Title level={2} style={{ color: titleColor, marginBottom: "8%" }}>
          {itemUpdate ? "Sửa Công Việc" : "Thêm Công Việc"}
        </Title>
        <Row>
          <Col span={8}>
            <Title level={4}>Tên công việc:</Title>
          </Col>
          <Col span={16}>
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setNameUpdate(e.target.value);
              }}
            />
          </Col>
        </Row>
      </div>
    </Modal>
  );
}

export default ModalCreateJob;
