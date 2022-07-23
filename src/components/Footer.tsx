import React from "react";
import styled from "styled-components";

import LogoImg from "../assets/logo.png";

const Footer = () => (
  <Area>
    <Wrapper>
      <FtGroup>
        <FtLogo>
          <img alt="footerLogo" src={LogoImg} />
        </FtLogo>
        <FtInfo>
          <InfoItem>
            <b>상호명</b> : Hee Design
          </InfoItem>
          <InfoItem>
            <b>사업자번호</b> : 839-15-01847
          </InfoItem>
          <InfoItem>
            <b>대표자</b> : 안민혁
          </InfoItem>
          <InfoItem>
            <b>TEL</b> : 010-7577-2412
          </InfoItem>
          <InfoItem>
            <b>위치</b> : 무거동 신복로터리 농협 옆
          </InfoItem>
          <InfoItem>
            <b>주소</b> : 울산 남구 북부순환도로 3
          </InfoItem>
        </FtInfo>
      </FtGroup>
    </Wrapper>
  </Area>
);

const FtGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  width: 100%;
  min-height: 30vh;
  padding-top: 30px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;
const FtLogo = styled.div``;

const FtInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  line-height: 1;
  color: #adadad;

  @media only screen and (max-width: 1050px) {
    justify-content: center;
    text-align: center;
  }
`;
const InfoItem = styled.span`
  padding-right: 10px;
  padding-left: 10px;

  margin-bottom: 15px;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-color: #464946;
`;

export default Footer;
