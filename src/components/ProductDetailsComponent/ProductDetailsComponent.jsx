import React, { useState } from "react";
import { Row, Col, Image, Rate, } from "antd";
import {WrapperStyleImageSmall,WrapperStyleColImage,WrapperStyleNameProduct,WrapperStyleTextSell,WrapperPriceProduct,WrapperPriceTextProduct,WrapperAddressProduct,WrapperQualityProduct,WrapperInputNumber,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import imageProductSmall from '../../assets/images/imagesmall.webp'
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { convertPrice } from "../../utils";
import { useSelector } from "react-redux";


const ProductDetailsComponent = ({idProduct}) => {
  const [numProduct, setNumProduct] = useState(1)
  const onChange = (value) => { 
    setNumProduct(Number(value))
}
  const user = useSelector((state) => state.user)
  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1]
      if(id) {
        const res = await ProductService.getDetailsProduct(id)
      return res.data
      }
    }
    const handleChangeCount = (type, limited) => {
      if(type === 'increase') {
          if(!limited) {
              setNumProduct(numProduct + 1)
          }
      }else {
          if(!limited) {
              setNumProduct(numProduct - 1)
          }
      }
  }
  const { isPending, data: productDetails } = useQuery({  queryKey: ['products-details', idProduct] , queryFn: fetchGetDetailsProduct , enabled : !!idProduct})
  return (
    <Loading isPending={isPending}>
    <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height:'100%' }}>
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                    <Image src={productDetails?.image} alt="image product" preview={false} />
                    <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                        <WrapperStyleColImage span={4} sty>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleColImage>

                    </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>{productDetails?.name}</WrapperStyleNameProduct>
        <div>
            <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} />
            <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>{convertPrice(productDetails?.price)}</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span> Giao Đến </span>
          <span className="address"> {user?.address} - </span>
          <span className="change-address"> Đổi địa chỉ </span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số Lượng</div>
          <WrapperQualityProduct>
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease',numProduct === 1)}>
              <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
          </button>
          <WrapperInputNumber onChange={onChange} defaultValue={1} max={productDetails?.countInStock} min={1} value={numProduct} size="small" />
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase',  numProduct === productDetails?.countInStock)}>
              <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
          </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
           
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Chọn Mua"}
            styleTextButton={{ color: "#fff" }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92, 182)",
              borderRadius: "4px",
            }}
            textButton={"Mua trước trả sau"}
            styleTextButton={{ color: "rgb(13, 92, 182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
    </Loading>
  );
};

export default ProductDetailsComponent;
