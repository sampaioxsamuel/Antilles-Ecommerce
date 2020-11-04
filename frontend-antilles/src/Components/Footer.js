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
  justify-content: space-between;
  background-color: #dadada;
  text-align: center;
  margin-top: 50px;
`;

const Container = styled.div`
  margin: 10px 50px;
`;

const Logo = styled.h1`
  font-size: 2em;
  color: #212529;
`;

const FooterText = styled.p`
  color: #212529;
  font-style: italic;
`;

const Icon = styled.a`
  color: #212529;
  transition: 280ms ease-in-out;
  &:hover {
    color: #333;
  }
`;

const StyledInstagram = styled(Instagram)`
  margin: 5px;
`;

const StyledTwitter = styled(Twitter)`
  margin: 5px;
`;

const StyledYoutube = styled(Youtube)`
  margin: 5px;
`;

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <Logo>ALS</Logo>
      </Container>
      <Container>
        <FooterText>Some rights reserved &copy; 2020 </FooterText>
      </Container>
      <Container>
        <Icon href="https://instagram.com" target="_blank">
          <StyledInstagram size="1.5em" />
        </Icon>
        <Icon href="https://twitter.com" target="_blank">
          <StyledTwitter size="1.5em" />
        </Icon>
        <Icon href="https://youtube.com" target="_blank">
          <StyledYoutube size="1.5em" />
        </Icon>
      </Container>
    </MainFooter>
  );
};

export default Footer;
