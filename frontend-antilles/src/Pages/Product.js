import styled from 'styled-components';
import useFetch from '../CustomHooks/useFetch';
import { useEffect } from 'react';
import { SendButton } from '../Components/Button';
import { Price, Title } from '../Components/Text';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Product = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto 220px;
  justify-content: center;

  @media (max-width: 960px) {
    width: initial;
    flex-direction: column;
  }
`;

const ContainerPhoto = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const ContainerDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const ProductTitle = styled(Title)`
  font-weight: 700;
  font-size: 3em;
`;

const ProductImage = styled.img`
  width: 100%;
  margin-right: 50px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);

  @media (max-width: 960px) {
    margin-right: 0;
  }
`;

const ProductDetail = styled.p`
  font-size: 1em;
  margin: 15px 0;
`;

const ProductPrice = styled(Price)`
  font-size: 1.9em;
  font-weight: 300;
  max-width: 200px;
  margin: 20px 0;
`;

const CartButton = styled(SendButton)`
  padding: 13px 0;
  text-align: center;
  width: 200px;
  margin-top: 20px;
  background-color: #dee2e6;
  color: #212529;

  &:hover {
    background-color: #212529;
    color: #dee2e6;
  }

  @media (max-width: 960px) {
    width: initial;
    padding: 19px 0;
  }
`;

const BagIcon = styled(FaShoppingCart)`
  position: relative;
  top: 3px;
  left: 10px;
`;

const Products = () => {
  const { data, loading, request } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      document.title = 'Antilles - Products';
      await request(`http://localhost:8000/products/${id}`);
    }
    fetchProduct();
  }, [request, id]);
  console.log(data);

  if (loading) return null;
  return (
    <Product className="slidePage">
      {data && (
        <>
          <ContainerPhoto>
            <ProductImage src={data.imgs[1]} alt={id} title={data.name} />
          </ContainerPhoto>
          <ContainerDetails>
            <ProductTitle>{data.name}</ProductTitle>
            <ProductPrice>$ {data.price}</ProductPrice>
            <ProductDetail>{data.description}</ProductDetail>
            <CartButton to="/buy">
              Add to Cart
              <BagIcon size="1.1em" />
            </CartButton>
            {/* <SendButton to={`/cart?=${data.id}`}>Add to cart</SendButton> */}
          </ContainerDetails>
        </>
      )}
    </Product>
  );
};

export default Products;
