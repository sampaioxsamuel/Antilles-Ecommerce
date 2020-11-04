import styled from 'styled-components';
import {
  AiFillInstagram as Instagram,
  AiFillYoutube as Youtube,
} from 'react-icons/ai';

import { FaTwitter as Twitter } from 'react-icons/fa';

const MainFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: #e3e3e3;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  margin: 15px 100px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Logo = styled.h1`
  font-size: 2em;
  color: #291720;
`;

const FooterLink = styled.a`
  color: #291720;
  margin: 12px;
  text-align: center;
`;

const Icon = styled.a`
  color: #291720;
  margin: 0 7px;
  transition: 280ms ease-in-out;

  &:hover {
    color: #1a579e;
  }
`;

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <Logo>ALS</Logo>
      </Container>
      <Container>
        <FooterLink>some rights reserved &copy; 2020 </FooterLink>
      </Container>
      <Container>
        <Icon href="https://instagram.com" target="_blank">
          <Instagram size="1.5em" />
        </Icon>
        <Icon href="https://twitter.com" target="_blank">
          <Twitter size="1.5em" />
        </Icon>
        <Icon href="https://youtube.com" target="_blank">
          <Youtube size="1.5em" />
        </Icon>
      </Container>
    </MainFooter>
  );
};

export default Footer;
