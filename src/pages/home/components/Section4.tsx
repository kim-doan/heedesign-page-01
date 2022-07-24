import FlagIcon from "assets/flagIcon.png";
import SectionBackground3 from "assets/sectionBackground3.png";
import React from "react";
import styled from "styled-components";

import { AnimationWrapper } from "components/Animation";

const Section4 = () => (
  <Area>
    <Wrapper>
      <Section type="scaleIn" delay={1000}>
        <SectionIcon>
          <img src={FlagIcon} height="100%" alt="check" />
        </SectionIcon>
        <SectionContent>
          <span>끊임없는 문의 폭주</span>
        </SectionContent>
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
  background-image: url(${SectionBackground3});
  background-color: #ffce50;
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
  color: white;
  text-align: center;
  -webkit-text-stroke: 0.12rem black;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem black;
  }
`;

const SectionImageGroup = styled.div`
  width: 100%;
  height: 60vh;
  background-color: white;
  border-radius: 0.5rem;
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
`;
export default Section4;
