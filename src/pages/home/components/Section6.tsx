import KakaoIcon from "assets/contactKakao.png";
import React from "react";
import styled from "styled-components";

const Section6 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Title>
          <TitleIcon>
            <img src={KakaoIcon} height="100%" alt="check" />
          </TitleIcon>
          <TitleSection1>
            <span>폰싸게하는언니에 무엇이든 물어보세요!</span>
          </TitleSection1>
          <TitleSection2>
            <span>
              아래 <b>카카오톡 문의하기</b> 클릭 후 채널추가하여 문의해주세요
            </span>
          </TitleSection2>
        </Title>
      </Section>
    </Wrapper>
  </Area>
);

const Section = styled.div`
  width: 100%;
  height: 50vh;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-color: #ffea00;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
`;
const TitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const TitleSection1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  margin: 30px auto;
  font-size: 1.5rem;
  color: #000;
  text-align: center;

  @media (max-width: 500px) {
    margin: 15px auto;
  }
`;

const TitleSection2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  color: #000;
  text-align: center;
`;

export default Section6;
