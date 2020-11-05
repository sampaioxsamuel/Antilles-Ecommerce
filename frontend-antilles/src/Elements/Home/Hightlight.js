import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 35px 100px 120px 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Camera = styled.div`
  background-image: url('https://i.imgur.com/9w01WM9.jpg');
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;

  @media (max-width: 768px) {
    width: 100%;
    height: 960px;
    margin: 0;
  }
`;

const Hover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 280ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Headphone = styled.div`
  background-image: url('https://i.imgur.com/yEWOZf5.jpg');
  background-size: cover;
  background-position: center;

  height: 100%;
  margin-bottom: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Watch = styled(Headphone)`
  background-image: url('https://i.imgur.com/zfoZmRT.jpg');
  margin-bottom: 0;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  text-transform: uppercase;
  color: #fff;
`;

export const HightlightElement = () => {
  return (
    <Section>
      <Camera>
        <Link to="/products/Vintage Camera">
          <Hover>
            <Title>Cameras</Title>
          </Hover>
        </Link>
      </Camera>
      <Grid>
        <Headphone>
          <Link to="/products/smartwatch">
            <Hover>
              <Title>Watches</Title>
            </Hover>
          </Link>
        </Headphone>
        <Watch>
          <Link to="/products/smartwatch">
            <Hover>
              <Title>Headphones</Title>
            </Hover>
          </Link>
        </Watch>
      </Grid>
    </Section>
  );
};

export default HightlightElement;
