import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
`;

const Container = styled.div`
  margin: 10px 50px;
`;

const Logo = styled.h1`
  color: #212529;
  font-weight: 400;
  font-size: 3em;
  text-transform: uppercase;
`;

const HeaderLink = styled(NavLink)`
  color: #212529;
  margin: 0 25px;
  text-align: center;
  text-transform: lowercase;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 4px;
    background-color: #212529;
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
    background-color: #212529;
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
          <HeaderLink to="/login">sign in</HeaderLink>
        </ul>
      </Container>
    </MainHeader>
  );
};

export default Header;
