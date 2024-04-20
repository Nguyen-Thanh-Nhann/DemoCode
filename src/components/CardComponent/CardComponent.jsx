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
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          </span>
          <span>| Đã bán 1000+ </span>
        </WrapperReportText>
        <WrapperPriceText>
          19.000.000đ
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
