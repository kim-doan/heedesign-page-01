import FlagIcon from "assets/flagIcon.png";
import SectionBackground2 from "assets/sectionBackground2.png";
import React from "react";
import styled from "styled-components";

import { AnimationWrapper } from "components/Animation";

const Section3 = () => (
  <Area>
    <Wrapper>
      <Section type="fadeLeft" delay={1000}>
        <SectionIcon>
          <img src={FlagIcon} height="100%" alt="check" />
        </SectionIcon>
        <SectionContent>
          <span>손님이 끊기지 않는이유</span>
        </SectionContent>
        <SectionContent2>
          <span>후기가 증명</span>
        </SectionContent2>
        <SectionImageGroup />
      </Section>
    </Wrapper>
  </Area>
);

const Section = styled(AnimationWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 130vh;
  @media (max-width: 1000px) {
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-image: url(${SectionBackground2});
  background-color: #ff8787;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.8rem;
  color: #32a61f;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const SectionContent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.8rem;
  color: #ffce50;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const SectionImageGroup = styled.div`
  width: 100%;
  height: 50vh;
  border: 2px solid black;
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
`;
export default Section3;
