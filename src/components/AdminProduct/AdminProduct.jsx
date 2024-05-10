import React from 'react'
import { WrapperHeader } from './style'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import TableComponent from '../TableComponent/TableComponent'

const AdminProduct = () => {
  return (
    <div>
      <WrapperHeader>Quản Lý Sản Phẩm</WrapperHeader>
      <div style={{ marginTop: '20px' }}>
      <Button><PlusOutlined /></Button>
      </div>
      <div style={{ marginTop: '20px' }}>
      <TableComponent/>
      </div>
    </div>
  )
}

export default AdminProduct
