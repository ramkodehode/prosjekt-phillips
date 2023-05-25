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
  AnchorTag,
  Details,
} from './Contact.styled';

import { AiFillPhone, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

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
        <Heading id="kontakt">Kontakt Trude</Heading>

        <Wrapper>
          <ContactInfo>
            <Ul>
              <HeadingTwo>Kontaktinfo</HeadingTwo>

              <Li>
                <AiFillPhone /> <Details>+47 91691334</Details>
              </Li>
              <Li>
                <MdEmail /> <Details>trude@phillipskarriere.no</Details>
              </Li>
              <Li>
                <AiFillLinkedin />
                <AnchorTag
                  href="https://www.linkedin.com/in/trude-skarstein-phillips-68635159"
                  target="_blank"
                >
                  LinkedIn
                </AnchorTag>
              </Li>

              <Li>
                <HiLocationMarker />
                <Details>
                  Fysisk undervisning og veiledning foregår i moderne og
                  sentrumsnære lokaler i Bergen.
                </Details>
              </Li>
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
