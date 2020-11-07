import styled from 'styled-components';
import useFetch from '../CustomHooks/useFetch';
import { useEffect } from 'react';
import { PrimaryButton } from '../Components/Button';
import { Price, Title } from '../Components/Text';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 120px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProductLink = styled(Link)`
  margin: 20px 50px 100px 50px;
  transition: 400ms ease-in-out;
`;

const ProductImage = styled.img``;

const ProductPrice = styled(Price)`
  margin-top: -10px;

  span {
    margin-right: 5px;
  }
`;

const CartIcon = styled(FaShoppingCart)`
  position: relative;
  top: 2px;
  left: 9px;
`;

const Products = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    async function fetchProduct() {
      document.title = 'Antilles - Products';
      await request('http://localhost:8000/products');
    }
    fetchProduct();
  }, [request]);

  if (loading) return null;
  return (
    <ProductContainer className="slidePage">
      {data &&
        data.map((product) => (
          <ProductLink key={product.id} to={`/products/${product.id}`}>
            <ProductCard>
              <ProductImage src={product.imgs[0]} alt={product.name} />
              <PrimaryButton size="13px 40px">
                Add to Cart
                <CartIcon size="1em" />
              </PrimaryButton>
              <Title margin="1rem">{product.name}</Title>
              <ProductPrice size="1.1em">
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
