import styled from 'styled-components';
import { PrimaryButton } from '../../Components/Button';
import { HiArrowRight } from 'react-icons/hi';

const MainContainer = styled.div`
  width: 100%;
  height: 460px;
  background-color: blue;
`;

const MainContent = styled.div`
  padding-left: 40px;
  padding-top: 40px;
`;

const ProductTitle = styled.h2`
  font-size: 2.5em;
  color: #fff;
`;

export const ProductAbout = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  max-width: 50%;
  color: #fff;
`;

export const MainElement = () => {
  return (
    <MainContainer>
      <MainContent>
        <ProductTitle>Minolta SRT-101</ProductTitle>
        <ProductAbout>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua"
        </ProductAbout>
        <PrimaryButton href="/products">
          Learn More <HiArrowRight className="icon" />
        </PrimaryButton>
      </MainContent>
    </MainContainer>
  );
};

export default MainElement;
