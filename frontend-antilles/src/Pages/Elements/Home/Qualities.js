import {
  HiArchive,
  HiCurrencyDollar,
  HiShieldCheck,
  HiChatAlt2,
} from 'react-icons/hi';

import { ProductAbout } from './Main';

const { default: styled } = require('styled-components');

const Quality = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 250px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-bottom: 250px;
  }
`;

const QualityContainer = styled.div`
  margin: 25px 60px;
`;

const QualityText = styled(ProductAbout)`
  color: #291720;
  max-width: 100%;
  font-weight: 700;
`;

const Circle = styled.span`
  text-align: center;
  display: inline-block;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #291720;
`;

const StyledDelivery = styled(HiArchive)`
  margin-top: 20%;
`;

const StyledMoney = styled(HiCurrencyDollar)`
  margin-top: 20%;
`;

const StyledShield = styled(HiShieldCheck)`
  margin-top: 20%;
`;

const StyledChat = styled(HiChatAlt2)`
  margin-top: 20%;
`;

const QualityElement = () => {
  return (
    <Quality>
      <QualityContainer>
        <QualityText>Entrega Rápida</QualityText>
        <Circle>
          <StyledDelivery color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
      <QualityContainer>
        <QualityText>Reembolso Facil</QualityText>
        <Circle>
          <StyledMoney color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
      <QualityContainer>
        <QualityText>Site Confiavel</QualityText>
        <Circle>
          <StyledShield color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
      <QualityContainer>
        <QualityText>Chat Online</QualityText>
        <Circle>
          <StyledChat color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
    </Quality>
  );
};
export default QualityElement;
