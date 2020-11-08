import { useEffect } from 'react';
import styled from 'styled-components';
import MainElement from '../Elements/Home/Main';
import HightlightElement from '../Elements/Home/Hightlight';

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Container = styled.div``;

const Home = () => {
  useEffect(() => {
    document.title = 'Antilles - Home';
  }, []);

  return (
    <Main className="slidePage">
      <MainElement />
      <HightlightElement />
    </Main>
  );
};

export default Home;
