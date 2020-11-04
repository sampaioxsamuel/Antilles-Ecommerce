import styled from 'styled-components';
import { PrimaryButton } from '../../Components/Button';
import { HiArrowRight } from 'react-icons/hi';

const Main = styled.div`
  width: 960px;
  height: 600px;
  overflow-y: hidden;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 280ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Product = styled.div`
  margin: auto 30px;
`;

const Image = styled.img`
  height: 660px;
  position: relative;
  top: -600px;
  z-index: -1;
`;

const ProductTitle = styled.h2`
  font-size: 3.5em;
  color: #fff;
  z-index: 1000;
`;

export const ProductAbout = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.1em;
  color: #fff;
  z-index: 1000;
`;

export const MainElement = () => {
  return (
    <Main>
      <Container>
        <Product>
          <ProductTitle>Black Friday 2020</ProductTitle>
          <ProductAbout>
            Promotions through the entire month, with our bests products
          </ProductAbout>
          <PrimaryButton to="/products">
            See Products <HiArrowRight className="icon" />
          </PrimaryButton>
        </Product>
      </Container>
      <Image
        src="https://images.unsplash.com/photo-1496950866446-3253e1470e8e"
        alt="promo"
      />
    </Main>
  );
};

export default MainElement;
