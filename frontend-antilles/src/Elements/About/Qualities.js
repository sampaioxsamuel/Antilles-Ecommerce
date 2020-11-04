import {
  HiArchive,
  HiCurrencyDollar,
  HiShieldCheck,
  HiChatAlt2,
} from 'react-icons/hi';

import { ProductAbout } from '../Home/Main';

const { default: styled } = require('styled-components');

const Quality = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const QualityContainer = styled.div`
  margin: 25px 60px;
`;

const QualityText = styled(ProductAbout)`
  color: #212529;
  max-width: 100%;
  font-weight: 700;
  text-align: center;
`;

const Circle = styled.span`
  text-align: center;
  display: inline-block;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #212529;
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
        <QualityText>Fast Delivery</QualityText>
        <Circle>
          <StyledDelivery color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
      <QualityContainer>
        <QualityText>Easy Refund</QualityText>
        <Circle>
          <StyledMoney color="#fff" size="3.75em" />
        </Circle>
      </QualityContainer>
      <QualityContainer>
        <QualityText>Trust System</QualityText>
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
