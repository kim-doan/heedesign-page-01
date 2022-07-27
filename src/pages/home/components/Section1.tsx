import React from "react";
import styled from "styled-components";

const Section1 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Title>
          <TitleSection1>
            소중한 시간 절약하세요! 여기가 진짜입니다!
          </TitleSection1>
          <TitleSection2>
            <span>울산지역</span>
          </TitleSection2>
          <TitleSection2 color="#FFC21F">
            <span>
              <b>우대혜택 제공</b> 매장
            </span>
          </TitleSection2>
          <TitleSection1 color="#FF8787">
            울산에서 <b>성지</b>를 찾는 <b>한분의 고객도</b> 놓치지 않겠습니다
          </TitleSection1>
        </Title>
      </Section>
    </Wrapper>
  </Area>
);

const Title = styled.div`
  padding: 3rem;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  line-height: 1.5;

  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

const TitleSection1 = styled.div<{ color?: string }>`
  color: #fff;

  b {
    color: ${(props) => props.color || "#fff"};
    background-color: rgb(0 0 0 / 60%);
  }
`;
const TitleSection2 = styled.div<{ color?: string }>`
  color: #fff;

  b {
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 4rem;
    background-color: rgb(0 0 0 / 60%);
  }

  @media (max-width: 500px) {
    span {
      font-size: 3.5rem;
      white-space: word-wrap;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(1280px + 15rem);
  height: 100%;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-color: #d9d9d9;
`;

export default Section1;
