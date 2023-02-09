import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taoPhongAction } from "../../../../redux/actions/QuanLyPhongAction";
import { layDanhSachViTriAction } from "../../../../redux/actions/QuanLyViTriAction";

const { Option } = Select;

export default function AddNewRoom() {
  const { arrViTri } = useSelector((state) => state.QuanLyViTriReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachViTriAction());
  }, []);
  const renderViTri = () => {
    return arrViTri.map((viTri, index) => {
      return (
        <Option value={viTri._id} key={index}>
          {viTri.province}
        </Option>
      );
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      guests: 1,
      bedRoom: 1,
      bath: 1,
      description: "",
      price: 100000,
      elevator: false,
      hotTub: false,
      pool: false,
      indoorFireplace: false,
      dryer: false,
      gym: false,
      kitchen: false,
      wifi: false,
      heating: false,
      cableTV: false,
      locationId: "",
    },
    onSubmit: (values) => {
      dispatch(taoPhongAction(values));
    },
  });

  const handleSwitch = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
      <Form.Item label="Name">
        <Input name="name" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Guests">
        <InputNumber onChange={handleSwitch("guests")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="BedRoom">
        <InputNumber onChange={handleSwitch("bedRoom")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="Bath">
        <InputNumber onChange={handleSwitch("bath")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="Description">
        <Input name="description" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber onChange={handleSwitch("price")} />
      </Form.Item>
      <Form.Item label="Elevator">
        <Switch onChange={handleSwitch("elevator")} />
      </Form.Item>
      <Form.Item label="Hot Tub">
        <Switch onChange={handleSwitch("hotTub")} />
      </Form.Item>
      <Form.Item label="Pool">
        <Switch onChange={handleSwitch("pool")} />
      </Form.Item>
      <Form.Item label="Indoor Fireplace">
        <Switch onChange={handleSwitch("indoorFireplace")} />
      </Form.Item>
      <Form.Item label="Dryer">
        <Switch onChange={handleSwitch("dryer")} />
      </Form.Item>
      <Form.Item label="Gym">
        <Switch onChange={handleSwitch("gym")} />
      </Form.Item>
      <Form.Item label="Kitchen">
        <Switch onChange={handleSwitch("kitchen")} />
      </Form.Item>
      <Form.Item label="Wifi">
        <Switch onChange={handleSwitch("wifi")} />
      </Form.Item>
      <Form.Item label="Heating">
        <Switch onChange={handleSwitch("heating")} />
      </Form.Item>
      <Form.Item label="CableTV">
        <Switch onChange={handleSwitch("cableTV")} />
      </Form.Item>
      <Form.Item name="locationId" label="Location">
        <Select
          style={{ width: "100%" }}
          onChange={handleSwitch("locationId")}
          allowClear
        >
          {renderViTri()}
        </Select>
      </Form.Item>

      <div className="text-center">
        <button
          type="submit"
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
        >
          Tạo phòng mới
        </button>
      </div>
    </Form>
  );
}
