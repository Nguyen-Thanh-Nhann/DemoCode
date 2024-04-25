import React from "react";
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import { WrapperStyleTextSell } from "../ProductDetailsComponent/style";

const CardComponent = () => {
  return (
    <div className="WrapperCardStyle_container">
      <WrapperCardStyle
        hoverable
        cover={
          <img
            alt="example"
            src="https://salt.tikicdn.com/cache/280x280/ts/product/a1/cd/ce/84a16c41ac07ce50d754e44a16ecbd1c.jpg.webp"
          />
        }
      >
        <img
          src={logo}
          style={{
            width: "68px",
            height: "14px",
            position: "absolute",
            top: -1,
            left: -1,
            borderTopLeftRadius: "3px",
          }}
        />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
          <span style={{ marginRight: "4px" }}>
            <span>4.96 </span>
            <StarFilled style={{ fontSize: "12px", color: 'rgb(253, 216, 54)' }} />
          </span>
          <WrapperStyleTextSell> | Đã bán 1000+ </WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
          <span style={{marginRight:'8px'}}>19.000.000đ</span>
          <WrapperDiscountText>
            -5%
          </WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
