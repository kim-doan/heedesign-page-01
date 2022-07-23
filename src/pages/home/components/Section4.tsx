import React from "react";
import styled from "styled-components";

const Section4 = () => (
  <Area>
    <Wrapper>
      <Section />
    </Wrapper>
  </Area>
);

const Section = styled.div`
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
  background-color: red;
`;

const Area = styled.div`
  width: 100%;
  background-color: black;
`;

export default Section4;
