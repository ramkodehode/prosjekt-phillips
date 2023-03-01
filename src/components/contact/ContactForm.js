import React, { useRef } from 'react';
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

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'template_pg7job2',
        form.current,
        'user_eDz6z61ypctV8WwCbGfsH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <TextArea name="message" required />
          <SubmitButton type="submit" value="Send" />
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
