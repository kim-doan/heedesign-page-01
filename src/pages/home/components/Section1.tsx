import React from "react";
import styled from "styled-components";

const Section1 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Image>Image Area</Image>
        <Title>
          <TitleSection1>울산&부산 최대규모</TitleSection1>
          <TitleSection2>
            <b>연합 휴대폰성지</b>
          </TitleSection2>
          <TitleSection3>폰싸게파는언니</TitleSection3>
        </Title>
      </Section>
    </Wrapper>
  </Area>
);

const TitleSection1 = styled.div``;
const TitleSection2 = styled.div``;
const TitleSection3 = styled.div``;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.5rem;
  line-height: 4rem;
  color: #165787;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
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
  background-color: #f4f2eb;
`;

export default Section1;
