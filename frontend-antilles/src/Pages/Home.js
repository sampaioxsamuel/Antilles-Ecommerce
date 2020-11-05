import { useEffect } from "react";
import styled from "styled-components";
import MainElement from "../Elements/Home/Main";

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Container = styled.section`
  margin: 0 40px;
`;

const Home = () => {
  useEffect(() => {
    document.title = "Antilles - Home";
  }, []);

  return (
    <Main>
      <Container className="slidePage">
        <MainElement />
      </Container>
    </Main>
  );
};

export default Home;
