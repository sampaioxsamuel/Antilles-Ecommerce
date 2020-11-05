import { useEffect } from 'react';
import styled from 'styled-components';
import MainElement from '../Elements/Home/Main';
import HightlightElement from '../Elements/Home/Hightlight';

export const Main = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Container = styled.section``;

const Home = () => {
  useEffect(() => {
    document.title = 'Antilles - Home';
  }, []);

  return (
    <Main>
      <Container className="slidePage">
        <MainElement />
        <HightlightElement />
      </Container>
    </Main>
  );
};

export default Home;
