const { default: styled } = require('styled-components');

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #212529;
  color: #fff;
  padding: 10px 0;
  // margin-top: 60px;
`;

const ContactTitle = styled.h2`
  font-size: 3em;
`;

const ContactText = styled.p`
  line-height: 0.1;
  font-size: 16px;
`;

const SmallContact = () => {
  return (
    <Container>
      <ContactTitle>Contato</ContactTitle>
      <ContactText>contato@antilles.com</ContactText>
      <ContactText>(85) 3266-9212</ContactText>
    </Container>
  );
};

export default SmallContact;
