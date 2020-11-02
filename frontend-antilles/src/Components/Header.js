import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 40px;
`;

const Logo = styled.h1`
  color: #232323;
  font-weight: 400;
  font-size: 3em;
  text-transform: uppercase;
`;

const HeaderLink = styled(NavLink)`
  color: #232323;
  margin: 30px;
  text-transform: lowercase;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 4px;
    background-color: #232323;
    transition: 270ms ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 4px;
    background-color: #232323;
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
