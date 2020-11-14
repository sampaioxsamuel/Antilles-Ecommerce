import styled from 'styled-components';
import { TitleLg } from '../Components/Text';
import { SendButton } from '../Components/Button';
import { AiFillHome } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 20px;
  }
`;
const NotFound = () => {
  return (
    <Container className="slidePage">
      <TitleLg>404 - Page not found :( </TitleLg>
      <SendButton size="25px 90px" to="/">
        Home
        <AiFillHome />
      </SendButton>
    </Container>
  );
};

export default NotFound;
