import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React from "react";
import { ACESSTOKEN, TOKENCYBERSOFT } from "../../../../util/settings/config";

export default function UploadImageDemo(propsRoute) {
  //   let id = propsRoute.match.params.id;
  let { id } = propsRoute;
  const props = {
    name: "file",
    action: "https://airbnb.cybersoft.edu.vn/api/users/upload-avatar",
    headers: {
      token: localStorage.getItem(ACESSTOKEN),
      tokenByClass: TOKENCYBERSOFT,
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
}
