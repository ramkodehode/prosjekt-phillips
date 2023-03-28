import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Wrapper,
  Ul,
  Li,
  ContactInfo,
  Form,
  Paragraph,
  Label,
  InputName,
  InputEmail,
  TextArea,
  SubmitButton,
  HeadingTwo,
  Heading,
  Message,
  Contact,
  Full,
  ContactGlobal,
} from './Contact.styled';

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
    <ContactGlobal>
      <Container>
        <Heading>Kontakt Trude</Heading>

        <Wrapper>
          <ContactInfo>
            <HeadingTwo>Kontakt info</HeadingTwo>
            <Ul>
              <Li>+47 91691334</Li>
              <Li>trude@phillipskarriere.no</Li>
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

                <InputEmail type="text" name="user_phone" required />
              </Paragraph>
              <Full>
                <Paragraph>
                  <Label>Melding</Label>

                  <TextArea
                    name="message"
                    rows="5"
                    placeholder="Skriv her..."
                    required
                  />
                </Paragraph>
              </Full>
              <Full>
                <Paragraph>
                  <SubmitButton type="submit" value="Send" />
                </Paragraph>
              </Full>
              {status ? <Message>Meldingen din har blitt sendt!</Message> : ''}
            </Form>
          </Contact>
        </Wrapper>
      </Container>
    </ContactGlobal>
  );
}

export default ContactForm;
