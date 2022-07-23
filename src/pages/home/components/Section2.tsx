import CheckIcon from "asset/checkIcon.png";
import SectionBackground from "asset/sectionBackground.png";
import React from "react";
import styled from "styled-components";

const Section2 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Title>
          <TitleIcon>
            <img src={CheckIcon} height="100%" alt="check" />
          </TitleIcon>
          <TitleSection1>
            <span>울산 NO.1 휴대폰 성지! 폰싸게파는언니</span>
          </TitleSection1>
          <TitleSection2>
            <span>휴대폰 비쌀이유가 없습니다</span>
          </TitleSection2>
          <TitleSection3>
            <span>전국최저가보장</span>
          </TitleSection3>
        </Title>
        <Card>
          <CardItem>
            <CardItemImage />
            <CardItemTextArea>
              <CardItemBoldText>1등 로타리휴대폰에서는</CardItemBoldText>
              <CardItemBoldText>
                저희 매장 별도로 지원으로 최저가 판매합니다.
              </CardItemBoldText>
              <CardItemLightText>
                원래 주는 통신사 혜택, 할인 등으로 말장난 치는일 NO!!
              </CardItemLightText>
              <CardItemLightText>
                최신폰부터 공짜폰까지 몽땅!! 최저가로!!
              </CardItemLightText>
            </CardItemTextArea>
          </CardItem>
          <CardItem>
            <CardItemImage />
            <CardItemTextArea>
              <CardItemBoldText>1등 로타리휴대폰에서는</CardItemBoldText>
              <CardItemBoldText>
                저희 매장 별도로 지원으로 최저가 판매합니다.
              </CardItemBoldText>
              <CardItemLightText>
                원래 주는 통신사 혜택, 할인 등으로 말장난 치는일 NO!!
              </CardItemLightText>
              <CardItemLightText>
                최신폰부터 공짜폰까지 몽땅!! 최저가로!!
              </CardItemLightText>
            </CardItemTextArea>
          </CardItem>
          <CardItem>
            <CardItemImage />
            <CardItemTextArea>
              <CardItemBoldText>1등 로타리휴대폰에서는</CardItemBoldText>
              <CardItemBoldText>
                저희 매장 별도로 지원으로 최저가 판매합니다.
              </CardItemBoldText>
              <CardItemLightText>
                원래 주는 통신사 혜택, 할인 등으로 말장난 치는일 NO!!
              </CardItemLightText>
              <CardItemLightText>
                최신폰부터 공짜폰까지 몽땅!! 최저가로!!
              </CardItemLightText>
            </CardItemTextArea>
          </CardItem>
        </Card>
      </Section>
    </Wrapper>
  </Area>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
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

const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  padding: 0 1rem;
  margin: 40px auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  background-color: #ffce50;
  border-radius: 2.5rem;

  @media (max-width: 500px) {
    margin: 20px auto;
  }
`;

const TitleSection2 = styled.div`
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

const TitleSection3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.5rem;
  color: #ffce50;
  text-align: center;
  -webkit-text-stroke: 0.11rem white;
  box-shadow: 0 0.5rem rgb(255 255 255 / 40%);

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media (max-width: 550px) {
    flex: 4;
  }
`;

const CardItem = styled.div`
  display: flex;
  height: 100%;
  padding: 0.5rem 1rem;
  margin: 1.2rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 3px 4px 8.55px 0.45px rgb(0 0 0 / 15%);

  @media (max-width: 1050px) {
    flex-direction: column;
    margin: 0.6rem;
    text-align: center;
  }
`;

const CardItemImage = styled.div`
  flex: 1;
  width: 250px;
  height: 250px;
  margin: auto;
  background-color: gray;
  @media (max-width: 1050px) {
    flex: 2;
    margin: 0 auto;
  }
`;
const CardItemTextArea = styled.div`
  flex: 3;
  padding: 0.5rem 1rem;
  margin: auto;
  font-size: 1.4rem;
  line-height: 1.5;
  @media (max-width: 1050px) {
    flex: 1;
  }
`;

const CardItemBoldText = styled.div`
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-weight: bold;
`;

const CardItemLightText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  color: #8c8c8c;
`;

const Area = styled.div`
  width: 100%;
  background-image: url(${SectionBackground});
  background-color: #073b61;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Section2;
