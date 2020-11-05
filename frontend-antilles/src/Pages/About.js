import { useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;

const Container = styled.div`
  margin: 0px 30px;
`;

const AboutTitle = styled.h2`
  font-size: 3em;
  color: #212529;
`;

const AboutText = styled.p`
  color: #343a40;
  max-width: 350px;
`;

const Image = styled.img`
  width: 340px;
  height: 500px;
`;

const About = () => {
  useEffect(() => {
    document.title = 'Antilles - About';
  }, []);
  return (
    <Main className="slidePage">
      <Container>
        <Image
          src="https://images.unsplash.com/photo-1524117304818-b4fadd3e127a"
          alt="about"
          title="About"
        />
      </Container>
      <Container>
        <AboutTitle>About</AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </AboutText>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </AboutText>
      </Container>
    </Main>
  );
};

export default About;
