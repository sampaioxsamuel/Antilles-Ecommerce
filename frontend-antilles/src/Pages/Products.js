import useFetch from "../CustomHooks/useFetch";
import { useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Button";
import { Link } from "react-router-dom";

const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
`;

const ProductLink = styled(Link)`
  margin: 20px 50px;
  transition: 400ms ease-in-out;
`;

const ProductImage = styled.img``;

const ProductTitle = styled.p`
  font-family: "Crimson Text", serif;
  font-size: 1.5em;
  color: #212529;
`;

const ProductPrice = styled.p`
  margin-top: -15px;
  font-weight: 700;
  color: #212529;

  span {
    margin-right: 5px;
  }
`;

const Products = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    async function fetchProduct() {
      document.title = "Antilles - Products";
      await request("http://localhost:8000/products");
    }
    fetchProduct();
  }, [request]);

  if (loading) return null;
  return (
    <ProductContainer className="slidePage">
      {data &&
        data.map((product) => (
          <ProductLink to={`/product/${product.name}`}>
            <ProductCard>
              <ProductImage src={product.img.src} alt={product.name} />
              <PrimaryButton to={`${product.id}/add-cart`}>
                Add to Cart
              </PrimaryButton>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>
                <span>$</span>
                {product.price}
              </ProductPrice>
            </ProductCard>
          </ProductLink>
        ))}
    </ProductContainer>
  );
};

export default Products;
