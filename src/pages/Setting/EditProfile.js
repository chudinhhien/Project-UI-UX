import { useState } from "react";
import { Button, Col, DatePicker, Form, Image, Input, Row, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import './EditProfile.scss'
import dayjs from "dayjs";

// Hàm chuyển đổi file sang URL base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function EditProfile() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  // Xử lý preview ảnh
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // Xử lý thay đổi fileList
  const handleChange = async ({ fileList: newFileList }) => {
    // Chỉ giữ lại file cuối cùng được tải lên
    const file = newFileList.slice(-1)[0];
    if (file) {
      const preview = await getBase64(file.originFileObj);
      setPreviewImage(preview);
    }
    setFileList(newFileList.slice(-1));
  };

  // Nút upload
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <div style={{ display: 'flex',marginRight: '30px'}}>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
          className={"customSizedUpload"}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            // width={200}
            style={{
              display: 'none'
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterClose: () => setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
        <Form layout="vertical">
          <Row gutter={[20, 20]}>
            <Col sm={12}>
              <Form.Item name="name" label="Your Name">
                <Input />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="userName" label="User Name">
                <Input />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="password" label="Password">
                <Input.Password placeholder="********" />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="dob" label="Date Of Birth">
                <DatePicker defaultValue={dayjs('18/03/2003', 'DD/MM/YYYY')} />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="address" label="Address">
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Row justify="end">
                <Button type="primary">Update info</Button>
              </Row>
            </Col>
          </Row>
        </Form>

      </div>

    </>
  );
}

export default EditProfile;
