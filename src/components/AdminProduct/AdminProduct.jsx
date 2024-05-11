import React, { useEffect, useState } from "react";
import { WrapperHeader } from "./style";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Modal } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import { WrapperUploadFile } from "./style";
import { getBase64 } from "../../utils";
import * as ProductService from "../../services/ProductService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import { render } from "@testing-library/react";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateProduct, setStateProduct] = useState({
    name: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    type: "",
    countInStock: "",
  })
  const [form] = Form.useForm();

  const mutation = useMutationHooks((data) => {
    const {
      name,
      price,
      description,
      rating,
      image,
      type,
      countInStock,
      discount,
    } = data
    const res = ProductService.createProduct({
      name,
      price,
      description,
      rating,
      image,
      type,
      countInStock,
      discount,
    })
    return res;
  })

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }

  const { data, isPending, isSuccess, isError } = mutation;

  const { data: products, isPending: isPendingProduct} = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
  const renderAction = () =>{
    return (
      <div>
        <DeleteOutlined style={{ color: 'rgb(26, 148, 255)', fontSize: '25px', cursor: 'pointer' }}  />
        <EditOutlined style={{ color: 'rgb(26, 148, 255)', fontSize: '25px', cursor: 'pointer' }} />
      </div>
    )
  }
  const columns =[
    {
      title:'Name',
      dataIndex:'name',
      render: (text) =><a>{text}</a>
    },
    {
      title:'Price',
      dataIndex:'price',
    },
    {
      title:'Rating',
      dataIndex:'rating',
    },
    {
      title:'Type',
      dataIndex:'type',
    },
    {
      title:'Action',
      dataIndex:'action',
      render: renderAction
    },
  ];
  const dataTable  = products?.data?.length && products?.data?.map((product) => {
    return { ...product, key: product._id }
  })
  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success();
      handleCancel();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess])

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      price: "",
      description: "",
      rating: "",
      image: "",
      type: "",
      countInStock: "",
    })
    form.resetFields()
  }

  const onFinish = () => {
    mutation.mutate(stateProduct);
  };

  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    })
  }
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    })
  }
  
  return (
    <div>
      <WrapperHeader>Quản Lý Sản Phẩm</WrapperHeader>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusOutlined />
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent columns={columns} products={products} isPending={isPending} data={dataTable}/>
      </div>
      <Modal
        title="Tạo Sản Phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Loading isPending={isPending}>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Tên Sản Phẩm"
              name="name"
              rules={[{ required: true, message: "Hãy nhập tên sản phẩm" }]}
            >
              <InputComponent
                value={stateProduct.name}
                onChange={handleOnChange}
                name="name"
              />
            </Form.Item>

            <Form.Item
              label="Loại"
              name="type"
              rules={[{ required: true, message: "Hãy nhập loại sản phẩm" }]}
            >
              <InputComponent
                value={stateProduct.type}
                onChange={handleOnChange}
                name="type"
              />
            </Form.Item>

            <Form.Item
              label="Số Lượng"
              name="countInStock"
              rules={[
                { required: true, message: "Hãy nhập số lượng sản phẩm" },
              ]}
            >
              <InputComponent
                value={stateProduct.countInStock}
                onChange={handleOnChange}
                name="countInStock"
              />
            </Form.Item>

            <Form.Item
              label="Giá"
              name="price"
              rules={[{ required: true, message: "Hãy nhập giá sản phẩm" }]}
            >
              <InputComponent
                value={stateProduct.price}
                onChange={handleOnChange}
                name="price"
              />
            </Form.Item>

            <Form.Item
              label="Mô Tả"
              name="description"
              rules={[{ required: true, message: "Hãy nhập mô tả sản phẩm" }]}
            >
              <InputComponent
                value={stateProduct.description}
                onChange={handleOnChange}
                name="description"
              />
            </Form.Item>

            <Form.Item
              label="Đánh Giá"
              name="rating"
              rules={[
                { required: true, message: "Hãy nhập đánh giá sản phẩm" },
              ]}
            >
              <InputComponent
                value={stateProduct.rating}
                onChange={handleOnChange}
                name="rating"
              />
            </Form.Item>

            <Form.Item
              label="Hình Ảnh"
              name="image"
              rules={[
                { required: true, message: "Hãy chọn hình ảnh sản phẩm" },
              ]}
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                <Button>Select File</Button>
                {stateProduct?.image && (
                  <img
                    src={stateProduct?.image}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                    alt="avatar"
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </Modal>
    </div>
  );
};

export default AdminProduct;
