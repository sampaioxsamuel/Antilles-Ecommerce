import styled from 'styled-components';
import { SendButton } from '../Components/Button';
import { InputContact, Message } from '../Components/Input';

const Main = styled.div`
  margin-bottom: 50px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #212529;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <Main className="slidePage">
      <Container>
        <Title>Contact us with the form below</Title>
      </Container>
      <Container>
        <InputContact type="text" placeholder="Name" />
        <InputContact type="email" placeholder="Email" />
        <Message placeholder="Message"></Message>
        <SendButton to="/message.php">Send</SendButton>
      </Container>
    </Main>
  );
};

export default Contact;
