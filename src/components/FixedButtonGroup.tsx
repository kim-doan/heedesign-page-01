import React from "react";
import styled from "styled-components";

const FixedButtonGroup = () => (
  <Group>
    <KakaoContactAnchor href="https://www.google.com">
      <span>🎃 </span>
      <p>
        <b>카카오톡</b> 문의하기
      </p>
    </KakaoContactAnchor>
    <PhoneContactAnchor href="https://www.naver.com">
      <span>🎃 </span>
      <p>
        지금 바로 <b>전화상담</b>
      </p>
    </PhoneContactAnchor>
  </Group>
);

const Group = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  @media screen and (min-width: 1280px) {
    left: 20%;
    width: 60%;
    height: 5rem;
    overflow: hidden;
  }
`;

const ContactAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 100%;
  text-decoration: none;

  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const KakaoContactAnchor = styled(ContactAnchor)`
  color: #3c1d1d;
  background-color: #fae000;
`;

const PhoneContactAnchor = styled(ContactAnchor)`
  color: #fff;
  background-color: #3c1d1d;
`;

export default FixedButtonGroup;
