import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrimaryText = styled.p`
  color: #fff;
`;

export const SecondaryText = styled.p`
  color: #212529;
`;

export const Price = styled.p`
  font-weight: 700;
  color: #212529;
  font-size: ${({ size }) => size};
`;

export const Title = styled.p`
  font-size: 1.4em;
  color: #212529;
  margin: ${({ margin }) => margin};
`;

export const TitleLg = styled.h2`
  font-size: 3em;
  color: #212529;
`;

export const PrimaryLinkText = styled(Link)`
  font-size: 1em;
  color: #212529;

  &:hover {
    color: #444;
  }
`;

export const Logo = styled.h1`
  color: #212529;
  font-weight: 400;
  font-size: 3em;
  transition: 480ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
