import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SendButton } from '../Components/Button';
import { Input } from '../Components/Input';
import { PrimaryLink, TitleLg } from '../Components/Text';

const Main = styled.section`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled(Input)`
  width: 100%;

  &:focus::placeholder {
    color: #fff;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const Login = () => {
  return (
    <Main className="slidePage">
      <TitleLg>Login</TitleLg>
      <Container>
        <LoginInput type="text" placeholder="Username" />
        <LoginInput type="password" placeholder="Password" />
        <Buttons>
          <SendButton to="/login?id">Sign In</SendButton>
          <PrimaryLink mt to="/register">
            Create Account
          </PrimaryLink>
          <PrimaryLink to="/reset-password">Forgot your password?</PrimaryLink>
        </Buttons>
      </Container>
    </Main>
  );
};

export default Login;
