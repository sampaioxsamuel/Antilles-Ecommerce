import styled from 'styled-components';
import MainElement from './Elements/Home/Main';
import QualityElement from './Elements/Home/Qualities';
import SmallContact from './Elements/Home/SmallContact';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Container = styled.section`
  margin: 0px 40px;
`;

const Home = () => {
  return (
    <Main>
      <Container>
        <MainElement />
      </Container>
      <Container>
        <QualityElement />
      </Container>
      <SmallContact />
    </Main>
  );
};

export default Home;
