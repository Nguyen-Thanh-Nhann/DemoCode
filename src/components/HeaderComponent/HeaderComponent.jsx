import React from "react";
import { Badge, Col } from "antd";
import {WrapperHeader,WrapperTextHeader,WrapperHeaderAccount,Span,WrapperContentPopup,} 
from "./style";
import { useState } from 'react';
import { Button, ConfigProvider, Popover } from 'antd';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined,} 
from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../services/UserService'
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";
import { useEffect } from 'react';

const HeaderComponent = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const handleNavigateLogin = () => {
      navigate('/sign-in')
    }
    const handleLogout = async() => {
      setLoading(true)
      await UserService.logoutUser()
      dispatch(resetUser())
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      setLoading(false)
    }
    useEffect(() => {
      setLoading(true)
      setUserName(user?.name)
      setUserAvatar(user?.avatar)
      setLoading(false)
    }, [user?.name, user?.avatar])

    const content = (
      <div>
        <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
        <WrapperContentPopup onClick={() => navigate('/profile-user') }>Thông tin người dùng</WrapperContentPopup>
      </div>
    );
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
      <Col span={6} style={{ display: "flex", gap: "54px", alignItems: "center" }}>
      <Loading isPending={loading}>
        <WrapperHeaderAccount>
              {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              ) : (
                <UserOutlined style={{ fontSize: '30px' }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div style={{ cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                  </Popover>
                </>
              ) : (
          <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
            <Span>Đăng Nhập/Đăng kí</Span>
            <div>
              <Span>Tài Khoản</Span>
              <CaretDownOutlined />
            </div>
          </div>
          )}
        </WrapperHeaderAccount>
        </Loading>
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
