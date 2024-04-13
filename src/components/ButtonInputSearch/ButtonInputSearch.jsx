import { Input, Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'


const ButtonInputSearch = (props) => {
  const {size ,placeholder, textButton, bordered} = props
  return (
    <div style={{display:'flex', backgroundColor:'#fff' }}>
      <Input style={{borderRadius:'0',backgroundColor:'#fff' }} placeholder={placeholder} />
      <Button style={{borderRadius:'0'}}  icon= {<SearchOutlined />}>{textButton}</Button>
    </div>
  )
}

export default ButtonInputSearch