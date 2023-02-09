import React, { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
// import User from "../User/User";
import { Input, Table, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useFormik } from "formik";
import { history } from "../../../App";

export default function QuanLyNguoiDung(props) {
  // Hiển thị danh sách user
  const { userList } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log("userList", userList);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layDanhSachNguoiDungAction();
    dispatch(action);
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Mã id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, user) => {
        return (
          <Fragment>
            <img src={user.avatar} />
          </Fragment>
        );
      },
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Chức vụ",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Số điện thoại",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "",
      dataIndex: "",
      render: (user) => {
        return (
          <Fragment>
            <button
              onClick={() => {
                history.push(`/admin/user/detailuser/${user._id}`);
              }}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Xem thông tin chi tiết
            </button>
            <button
              onClick={() => {
                history.push(`/admin/user/updateuser/${user._id}`);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              <i className="fa fa-pencil-alt"></i>
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => {
                // Gọi action xóa
                if (
                  window.confirm("Bạn có chắc muốn xóa người dùng này chứ?")
                ) {
                  // Gọi action
                  dispatch(xoaNguoiDungAction(user._id));
                }
              }}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
          </Fragment>
        );
      },
    },
  ];
  const data = userList;

  // Thêm thành viên
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div className="container mx-auto">
      <button
        onClick={() => {
          history.push("/admin/user/adduser");
        }}
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Thêm quản trị viên
      </button>
      <Table className="mt-5" columns={columns} dataSource={data} />;
    </div>
  );
}
