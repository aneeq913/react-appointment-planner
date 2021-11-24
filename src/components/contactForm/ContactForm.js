import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name:</label>
      <input
        type='text' 
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder='Contact Name: (John Doe)'
      />

      <br/>

      <label for='phone'>Phone Number:</label>
      <input
        type='tel' 
        name='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder='Phone Number: (+447111222333)'
        pattern='^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$'
      />

      <br/>

      <label for='email'>Email:</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder='Email Address (email@email.com)'
      />

      <input
        type='submit' 
        value='Add Contact'
      />
    </form>
  );
};
