import React from "react";
import Grid from "@mui/material/Grid";
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, Span } from "./style";
import Search from "antd/lib/transfer/search";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <WrapperHeader gutter = {16}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>
            <WrapperTextHeader>NHANTAIDEPTRAI</WrapperTextHeader>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <ButtonInputSearch
              placeholder="input search text"
              textButton="Tìm Kiếm"
              //onSearch={onSearch}
            />
          </div>
        </Grid>
        <Grid item xs={3} style={{display:'flex' , gap:'20px'}}>
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
            <ShoppingCartOutlined style={{fontSize:'30px', color:'#fff',}}/>
            <Span>Giỏ Hàng</Span>
          </div>
        </Grid>
      </Grid>
    </WrapperHeader>
  );
};

export default HeaderComponent;
