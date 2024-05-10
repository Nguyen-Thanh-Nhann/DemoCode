import React from 'react'
import { WrapperHeader } from './style'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import TableComponent from '../TableComponent/TableComponent'

const AdminUser = () => {
  return (
    <div>
      <WrapperHeader>Quản Lý Người Dùng</WrapperHeader>
      <div style={{ marginTop: '20px' }}>
      <Button><PlusOutlined /></Button>
      </div>
      <div style={{ marginTop: '20px' }}>
      <TableComponent/>
      </div>
    </div>
  )
}

export default AdminUser
