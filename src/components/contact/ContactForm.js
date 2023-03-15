import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}
body {

  background-color: #FCD19B;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1em;
}
`;

const ContactInfo = styled.div``;
const Ul = styled.ul``;
const Li = styled.li``;
const Contact = styled.div``;

const Heading = styled.h1``;
const HeadingTwo = styled.h2``;

const Paragraph = styled.p``;

const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

const Wrapper = styled.div``;

const Form = styled.form``;

const Label = styled.label``;

const InputName = styled.input``;
const InputEmail = styled.input``;
const TextArea = styled.textarea``;
const SubmitButton = styled.input``;

const Message = styled.p``;

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(true);
    emailjs
      .sendForm(
        'service_6ogjgdz',
        'template_pg7job2',
        form.current,
        'user_eDz6z61ypctV8WwCbGfsH'
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container>
      <GlobalStyle />

      <Wrapper>
        <Heading>Kontakt Trude</Heading>

        <ContactInfo>
          <HeadingTwo>Kontakt info</HeadingTwo>
          <Ul>
            <Li>Mobil: 91691334</Li>
            <Li>Epost: trude@phillipskarriere.no</Li>
            <Li>LinkedIn</Li>
          </Ul>
        </ContactInfo>
        <Contact>
          <Form ref={form} onSubmit={sendEmail}>
            <Paragraph>
              <Label>Fornavn</Label>
              <InputName type="text" name="first_name" required />
            </Paragraph>
            <Paragraph>
              <Label>Etternavn</Label>
              <InputName type="text" name="last_name" required />
            </Paragraph>
            <Paragraph>
              <Label>E-post</Label>
              <InputEmail type="email" name="user_email" required />
            </Paragraph>

            <Paragraph>
              <Label>Mobil</Label>
              <InputEmail type="email" name="user_phone" required />
            </Paragraph>

            <Paragraph>
              <Label>Melding</Label>
              <TextArea
                name="message"
                rows="5"
                placeholder="Skriv her..."
                required
              />
            </Paragraph>

            <Paragraph>
              <SubmitButton type="submit" value="Send" />
            </Paragraph>

            {status ? <Message>Meldingen din har blitt sendt!</Message> : ''}
          </Form>
        </Contact>
      </Wrapper>
    </Container>
  );
}

export default ContactForm;
