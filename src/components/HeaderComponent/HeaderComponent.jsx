import React from "react";
import { Button, Col } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, Span } from "./style";
import Search from "antd/lib/transfer/search";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <WrapperHeader gutter = {16} style={{margin :''}}>
   
        <Col span={6}>
          <div>
            <WrapperTextHeader>NHANTAIDEPTRAI</WrapperTextHeader>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <ButtonInputSearch
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              textButton="Tìm Kiếm"
              //onSearch={onSearch}
            />
          </div>
        </Col>
        <Col span={6} style={{display:'flex' , gap:'20px', alignItems:'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize:'30px'}}/>
            <div>
              <Span>Đăng Nhập/Đăng kí</Span>
              <div>
              <Span>Tài Khoản</Span>
              <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize:'40px', color:'#fff',}}/>
          </div>
        </Col>
    </WrapperHeader>
  );
};

export default HeaderComponent;
