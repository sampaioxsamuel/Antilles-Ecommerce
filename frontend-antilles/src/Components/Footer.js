import { Link } from "react-router-dom";
import styled from "styled-components";
import Instagram from "./svg/instagram-glyph-1.svg";
import Youtube from "./svg/Youtube.svg";
import Twitter from "./svg/twitter-brands.svg";

const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #e3e3e3;
`;

const Container = styled.div`
  margin: 0 50px;
`;

const Logo = styled.h1`
  font-size: 2em;
  color: #3e3e3e;
`;

const FooterLink = styled(Link)`
  color: #3e3e3e;
  margin: 12px;

  &:hover {
    color: #121212;
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 30px;
  color: #3e3e3e;
  margin: 0 7px;
  transition: transform 280ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <Logo>ALS</Logo>
      </Container>
      <Container>
        <ul>
          <FooterLink to="/help">Help</FooterLink>
          <FooterLink to="/return-product">Returns</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/policies">Policies</FooterLink>
        </ul>
      </Container>
      <Container>
        <a href="https://instagram.com">
          <Icon src={Instagram} alt="Instagram" />
        </a>
        <a href="twitter.com">
          <Icon src={Twitter} alt="Twitter" />
        </a>
        <a href="youtube.com">
          <Icon src={Youtube} alt="Youtube" />
        </a>
      </Container>
    </MainFooter>
  );
};

export default Footer;
