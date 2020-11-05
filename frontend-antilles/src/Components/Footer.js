import styled from "styled-components";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 60px;

  span {
    color: #212529;
    font-size: 0.8em;
    margin: 5px 0;
    font-family: "Lato", sans-serif;
  }
`;

const FooterTitles = styled.h1`
  font-size: 1em;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #111;
  margin-bottom: 15px;
`;

const FooterLink = styled(Link)`
  color: #212529;
  font-size: 0.8em;
  margin: 5px 0;

  &:hover {
    color: #444;
  }
`;

const Icon = styled.a`
  display: inline-block;
  color: #212529;
  transition: 280ms ease-in-out;
  margin-right: 10px;
  margin-top: 15px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Instagram = styled(FaInstagram)``;

const Facebook = styled(FaFacebookF)``;

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <ul>
          <List>
            <FooterTitles>menu</FooterTitles>
            <FooterLink to="/product/1">Cameras</FooterLink>
            <FooterLink to="/product/1">Watches</FooterLink>
            <FooterLink to="/product/1">Smart Watches</FooterLink>
            <FooterLink to="/product/1">Keyboards</FooterLink>
          </List>
          <List>
            <FooterTitles>information</FooterTitles>
            <FooterLink to="/about">FAQ</FooterLink>
            <FooterLink to="/about">Terms And Conditions</FooterLink>
            <FooterLink to="/about">Return Policy</FooterLink>
          </List>
          <List>
            <FooterTitles>contact</FooterTitles>
            <span to="/">Phone: +55 85 3262-9644</span>
            <span to="/">Email: contact@antilles.com</span>
            <div>
              <Icon href="https://facebook.com/" target="_blank">
                <Facebook size="1.2em" />
              </Icon>
              <Icon href="https://instagram.com" target="_blank">
                <Instagram size="1.2em" />
              </Icon>
            </div>
          </List>
        </ul>
      </Container>
    </MainFooter>
  );
};

export default Footer;
