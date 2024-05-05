import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  Span,
} from "./style";

import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const handleNavigateLogin = () => {
      navigate('/sign-in')
    }
    console.log('user', user)
  return (
    <div style={{ width:'100%', background:'rbg(26, 148, 255)', display:'flex', justifyContent:'center'}}>
    <WrapperHeader >
      <Col span={5}>
        <div>
          <WrapperTextHeader style={{paddingRight:'10px'}}>NHANTAIDEPTRAI</WrapperTextHeader>
        </div>
      </Col>
      <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
            textButton=" Tìm Kiếm "
            //onSearch={onSearch}
          />  
      </Col>
      <Col span={6} style={{ display: "flex", gap: "54px", alignItems: "center" }}
      >
        <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: "30px" }} />
          {user?.name?(
            <div style={{ cursor: 'pointer' }} >{user.name}</div>
          ): (
          <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
            <Span>Đăng Nhập/Đăng kí</Span>
            <div>
              <Span>Tài Khoản</Span>
              <CaretDownOutlined />
            </div>
          </div>
          )}
        </WrapperHeaderAccount>
        <div>
          <Badge count={0} showZero size="small">
            <ShoppingCartOutlined style={{ fontSize: "40px", color: "#fff" }} />
          </Badge>
        </div>
      </Col>
    </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
