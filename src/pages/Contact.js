import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ersq254', 'template_8nw0cwa', form.current, {
        publicKey: 'hWZorTHEnK7LuatC3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsEmailSent(true);
          window.alert('Ditt meddelande har skickats!');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className='maincontent'>
      <h1>Kontakta mig.</h1>
      <div className='control'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Namn</label>
          <div className='control__input'>
            <input type="text" name="user_name" required />
          </div>
          <label>Email</label>
          <div className='control__input'>
            <input type="email" name="user_email" required />
          </div>
          <label>Meddelande</label>
          <div className='control__input'>
            <textarea name="message" />
          </div>
          <input id="button" type="submit" value="Skicka mail" required />
        </form>
      </div>
      {isEmailSent && (
        <div className='confirmation-message'>
        </div>
      )}
    </div>
  );
};

export default Contact;
