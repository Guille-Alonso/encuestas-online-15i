import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsEmailValid(/^\S+@\S+\.\S+$/.test(emailValue)); // verifica si el valor del correo es una dirección válida
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`El correo electrónico es: ${email}`);
    // aquí puedes hacer lo que quieras con el correo electrónico, como enviarlo a través de una API o guardarlo en una base de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Correo electrónico:</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required // esto hace que el campo de correo electrónico sea obligatorio
      />
      <button type="submit" disabled={!isEmailValid}>
        Enviar
      </button>
    </form>
  );
}

export default EmailForm;