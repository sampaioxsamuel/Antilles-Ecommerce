import styled from "styled-components";
import { PrimaryLink } from "../../Components/Button";
import { HiArrowRight } from "react-icons/hi";

const Main = styled.div`
  max-width: 100%;
  height: 500px;
  margin: 0 100px;
  background-image: url("https://images.unsplash.com/photo-1496950866446-3253e1470e8e");
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    margin: 0 0;
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
`;

export const ProductAbout = styled.p`
  font-size: 1.1em;
  color: #fff;
`;

export const MainElement = () => {
  return (
    <Main>
      <Container>
        <Product>
          <ProductTitle>Vintage products</ProductTitle>
          <ProductAbout>
            See our collections of vintage products, the whole month with 50%
            promotion
          </ProductAbout>
          <PrimaryLink size="13px 40px" to="/products">
            See Products <HiArrowRight className="icon" />
          </PrimaryLink>
        </Product>
      </Container>
    </Main>
  );
};

export default MainElement;
