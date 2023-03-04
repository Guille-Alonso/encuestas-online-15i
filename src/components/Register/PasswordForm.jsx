import React, { useState } from 'react';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === passwordRepeat) {
        console.log('Passwords match!');
    } else {
        console.log('Passwords do not match!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label className='input-group'>
        <input placeholder="Contraseña" className='name' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className='input-group'>
        <input className='name' placeholder="Repeat Contraseña" type="password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />
        </label>
    </form>
  );
}

export default PasswordForm;