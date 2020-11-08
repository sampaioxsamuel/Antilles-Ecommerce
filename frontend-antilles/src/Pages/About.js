import { useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 120px;
`;

const Container = styled.div`
  margin: 0px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
  }
`;

const AboutTitle = styled.h2`
  font-size: 3em;
  color: #212529;
  position: relative;
  margin: 10px 0;

  /*
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 20%;
    height: 0.3rem;
    background-color: #982331;
  }
  */
`;

const AboutText = styled.p`
  color: #343a40;
  max-width: 350px;
`;

const Image = styled.img`
  width: 600px;
`;

const About = () => {
  useEffect(() => {
    document.title = 'Antilles - About';
  }, []);

  return (
    <Main className="slidePage">
      <Container>
        <Image
          src="https://images.unsplash.com/photo-1460134846237-51c777df6111"
          alt="about"
          title="About"
        />
      </Container>
      <Container>
        <ul>
          <li>
            <AboutTitle>About</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </AboutText>
          </li>
          <li>
            <AboutTitle>FAQ</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AboutText>
          </li>
          <li>
            <AboutTitle>Return Policy</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </AboutText>
          </li>
        </ul>
      </Container>
    </Main>
  );
};

export default About;
