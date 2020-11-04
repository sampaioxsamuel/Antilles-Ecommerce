import styled from 'styled-components';
import MainElement from './Elements/Home/Main';
import QualityElement from './Elements/Home/Qualities';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  margin: 0px 20px;
`;

const Home = () => {
  return (
    <>
      <Main>
        <Container>
          <MainElement />
        </Container>
        <Container>
          <QualityElement />
        </Container>
      </Main>
    </>
  );
};

export default Home;
