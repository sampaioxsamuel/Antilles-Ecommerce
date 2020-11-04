import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  margin: 5px 40px 50px 40px;
`;

const Logo = styled.h1`
  color: #291720;
  font-weight: 400;
  font-size: 3em;
  text-transform: uppercase;
`;

const HeaderLink = styled(NavLink)`
  color: #291720;
  margin: 0 30px;
  text-align: center;
  text-transform: lowercase;
  display: inline-block;

  @media (max-width: 768px) {
    margin-right: 50px;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 4px;
    background-color: #04a777;
    transition: 270ms ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 4px;
    background-color: #04a777;
  }
`;

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <Link to="/">
          <Logo>Antilles</Logo>
        </Link>
      </Container>
      <Container>
        <ul>
          <HeaderLink to="/products">Products</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </ul>
      </Container>
    </MainHeader>
  );
};

export default Header;
