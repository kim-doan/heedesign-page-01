import CheckIcon from "asset/checkIcon.png";
import SectionBackground from "asset/sectionBackground.png";
import React from "react";
import styled from "styled-components";

const Section5 = () => (
  <Area>
    <Wrapper>
      <Section>
        <SectionIcon>
          <img src={CheckIcon} height="100%" alt="check" />
        </SectionIcon>
        <SectionContent>
          <span>사전승낙판매점</span>
        </SectionContent>
      </Section>
    </Wrapper>
  </Area>
);

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.5rem;
  color: #ff8787;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1800px;

  @media (min-width: 1000px) {
    padding-top: 40px;
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
  background-image: url(${SectionBackground});
  background-color: #f4f2eb;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Section5;
