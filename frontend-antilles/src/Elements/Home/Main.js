import styled from "styled-components";
import { PrimaryButton } from "../../Components/Button";
import { HiArrowRight } from "react-icons/hi";

const Main = styled.div`
  max-width: 100%;
  height: 450px;
  margin: 0 120px;
  background-image: url("https://images.unsplash.com/photo-1496950866446-3253e1470e8e");
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: flex;
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

const ProductTitle = styled.h2`
  font-size: 3.5em;
  text-transform: uppercase;
  color: #fff;
  z-index: 1000;
`;

export const ProductAbout = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  color: #fff;
  z-index: 1000;
`;

export const MainElement = () => {
  return (
    <Main>
      <Container>
        <Product>
          <ProductTitle>Vintage products is here</ProductTitle>
          <ProductAbout>
            Promotions through the entire month, with our bests products
          </ProductAbout>
          <PrimaryButton to="/products">
            See Products <HiArrowRight className="icon" />
          </PrimaryButton>
        </Product>
      </Container>
    </Main>
  );
};

export default MainElement;
