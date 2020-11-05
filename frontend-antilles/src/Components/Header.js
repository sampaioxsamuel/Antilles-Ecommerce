import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../Components/Text';

const MainHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 70px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 10px 50px;
`;

const HeaderLink = styled(NavLink)`
  color: #212529;
  margin: 0 25px;
  text-align: center;
  text-transform: lowercase;

  @media (max-width: 800px) {
    margin: 0 15px;
  }

  &:after {
    content: '';
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
    content: '';
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
          <Logo>ANTILLES</Logo>
        </Link>
      </Container>
      <Container>
        <HeaderLink to="/products">Products</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
        <HeaderLink to="/login">sign in</HeaderLink>
      </Container>
    </MainHeader>
  );
};

export default Header;
