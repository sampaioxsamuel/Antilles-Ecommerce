import useFetch from "../CustomHooks/useFetch";
import { useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Button";
import { Link, useParams } from "react-router-dom";

const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  margin: 30px 50px;
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
  const { id } = useParams();

  useEffect(() => {
    document.title = `Antilles - ${id}`;
  }, [id]);

  return <div> {id} </div>;
};

export default Products;
