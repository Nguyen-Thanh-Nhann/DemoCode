import React from "react";
import { Row, Col, Image, } from "antd";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";


const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid e5e5e5", paddingRight: "8px" }}
      >
        <Image
          src="https://salt.tikicdn.com/cache/750x750/ts/product/40/5e/eb/4dcee6ceebbea004a14f212db4182b18.png.webp"
          alt="image product"
          preview="false"
        />
        <Row
          style={{
            paddingTop: "10px",
            gap: "5px",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src="https://salt.tikicdn.com/cache/100x100/ts/product/e3/67/56/a680a1070a152455bb0969833c687895.jpg.webp"
              alt="image smail"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src="https://salt.tikicdn.com/cache/100x100/ts/product/5a/b9/fb/84555d61c7ff278192fba6ed5be2580b.jpg.webp"
              alt="image smail"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src="https://salt.tikicdn.com/cache/100x100/ts/product/98/86/f3/9d08036fe7c885dc96265bdf14caab39.jpg.webp"
              alt="image smail"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src="https://salt.tikicdn.com/cache/100x100/ts/product/bd/93/1b/5eb850d833f17371df41fa598cfab3be.jpg.webp"
              alt="image smail"
              preview="false"
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Apple iPhone 15 Pro</WrapperStyleNameProduct>
        <div>
          <span>4.8</span>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell>| Đã bán 343+ </WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>27.490.000₫</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span> Giao Đến </span>
          <span className="address"> Q7,P. Phú Thuận, Hồ Chí Minh - </span>
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
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
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
  );
};

export default ProductDetailsComponent;
