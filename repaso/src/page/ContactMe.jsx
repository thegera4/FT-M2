import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactMe;
