import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Container = styled.section`
  @media only screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 800px;
    border: 2px blue solid;
  }
`;

const Form = styled.form`
  @media only screen and (max-width: 768px) {
    border-color: green;

    display: flex;
    flex-direction: column;
  }
`;

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
    <>
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Navn</Label>
          <InputName type="text" name="user_name" required />
          <Label>E-post</Label>
          <InputEmail type="email" name="user_email" required />
          <Label>Melding</Label>
          <TextArea name="message" placeholder="Skriv her..." required />
          <SubmitButton type="submit" value="Send" />

          {status ? <Message>Meldingen din har blitt sendt!</Message> : ''}
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
