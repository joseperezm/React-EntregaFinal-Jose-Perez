import React, { useState } from "react";


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };


        onConfirm(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="fondo-blanco">
          <div>
            <input
              placeholder="Nombre"
              className="form-control"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Teléfono"
              className="form-control mt-3"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Email"
              className="form-control mt-3"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Confirmar</button>
        </form>
      );
};

export default CheckoutForm;