import React from "react";
import styled from "styled-components";

import logoImg from "../assets/logo.png";

const Footer = () => (
  <FtGroup>
    <FtLogo>
      <img className="logoImage" alt="logo" src={logoImg} />
    </FtLogo>
    <FtInfo>
      <p>
        <InfoItem>
          <b>상호명</b> : Hee Design
          <Vline>|</Vline>
        </InfoItem>
        <InfoItem>
          <b>사업자번호</b> : 839-15-01847
          <Vline>|</Vline>
        </InfoItem>
        <InfoItem>
          <b>대표자</b> : 안민혁
          <Vline>|</Vline>
        </InfoItem>
        <InfoItem>
          <b>TEL</b> : 010-7577-2412
        </InfoItem>
      </p>
      <p>
        <InfoItem>
          <b>위치</b> : 무거동 신복로터리 농협 옆<Vline>|</Vline>
        </InfoItem>
        <InfoItem>
          <b>주소</b> : 울산 남구 북부순환도로 3
        </InfoItem>
      </p>
    </FtInfo>
  </FtGroup>
);

const FtGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 30vh;
  padding: 0 3rem;
  background-color: #464946;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const FtLogo = styled.div``;

const FtInfo = styled.div`
  p {
    padding-left: 20px;
    font-size: 1.2em;
    color: #797b79;
  }
`;
const InfoItem = styled.span`
  padding-left: 10px;
  font-size: 1.2em;
`;
const Vline = styled.span`
  padding-left: 10px;
`;
export default Footer;
