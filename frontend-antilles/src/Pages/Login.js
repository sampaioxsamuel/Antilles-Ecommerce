import styled from 'styled-components';
import { SendButton } from '../Components/Button';
import { Input } from '../Components/Input';
import { PrimaryLinkText, TitleLg } from '../Components/Text';

const Main = styled.section`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 150px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  a {
    margin: 10px 0;
  }
`;

const Login = () => {
  return (
    <Main className="slidePage">
      <TitleLg>Login</TitleLg>
      <Container>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Buttons>
          <SendButton to="/login?auth=">Sign In</SendButton>
          <PrimaryLinkText to="/register">Create Account</PrimaryLinkText>
          <PrimaryLinkText to="/reset-password">
            Forgot your password?
          </PrimaryLinkText>
        </Buttons>
      </Container>
    </Main>
  );
};

export default Login;
