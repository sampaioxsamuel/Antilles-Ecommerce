import styled from 'styled-components';
import MainElement from '../Elements/Home/Main';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Container = styled.section`
  margin: 0 40px;
`;

const Home = () => {
  return (
    <Main>
      <Container className="slidePage">
        <MainElement />
      </Container>
    </Main>
  );
};

export default Home;
