import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 150px;
`;

const ContainerWrapper = styled.div`
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
  width: 350px;
  height: 500px;
`;

const About = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Image
          src="https://images.unsplash.com/photo-1524117304818-b4fadd3e127a"
          alt="about"
          title="About"
        />
      </ContainerWrapper>
      <ContainerWrapper>
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
      </ContainerWrapper>
    </Container>
  );
};

export default About;
