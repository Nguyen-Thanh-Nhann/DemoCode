import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'



const ButtonInputSearch = (props) => {
  const {size ,placeholder, textButton, bordered, backgroundColorInput='#fff' 
  //,backgroundColorButton='rgb(13, 92, 182)' 
  , colorButton ='#fff'} = props
  return (
    <div style={{display:'flex', backgroundColor:'#fff' }}>
      <InputComponent
      size={size}
      bordered={bordered}
      placeholder={placeholder} 
      style={{borderRadius:'0'
      //,backgroundColor:backgroundColorInput 
    }} 
      />
      <ButtonComponent 
      size={size}
      bordered={bordered}
      styleButton={{borderRadius:'0'
      //, background:backgroundColorButton
      , border:!bordered && 'none' , color:'#0A68FF'}}  
      icon= {<SearchOutlined color={colorButton}style={{color:'#0A68FF'}}/>}
      textButton={textButton}
      styleTextButton={{color:'colorButton'}}
      />  
    </div>
  )
}

export default ButtonInputSearch