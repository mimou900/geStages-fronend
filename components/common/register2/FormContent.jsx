import { useState } from "react";
import axios from "../../../../pages/api/axios";
import { useRouter } from 'next/navigation';
import { useAuthContext } from "../../../Context/AuthContext";

const FormContent = () => {
  const { RegisterEtudiant, error } = useAuthContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [prenom, setPrenom] = useState('');
  const [registering, setRegistering] = useState(false); // New state for registering status

  const RegisterEtudiantForm = async event => {
    event.preventDefault();
    setRegistering(true); // Start registering

    await RegisterEtudiant({
      email,
      name,
      prenom,
      password
    });

    setRegistering(false); // Stop registering
  };

  return (
    <form onSubmit={RegisterEtudiantForm}>
      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        {error.name && (
          <span className="form-label-error">{error.name[0]}</span>
        )}
      </div>

      <div className="form-group">
        <label>Prenom</label>
        <input
          type="text"
          name="Prenom"
          placeholder="name"
          value={prenom}
          onChange={event => setPrenom(event.target.value)}
        />
        {error.prenom && (
          <span className="form-label-error">{error.prenom[0]}</span>
        )}
      </div>

      <div className="form-group">
        <label>Address Email</label>
        <input
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full"
          onChange={event => setEmail(event.target.value)}
        />
        {error.email && (
          <span className="form-label-error">{error.email[0]}</span>
        )}
      </div>

      <div className="form-group">
        <label>Mot de passe</label>
        <input
          id="password"
          type="password"
          value={password}
          className="block mt-1 w-full"
          onChange={event => setPassword(event.target.value)}
          autoComplete="new-password"
        />
        {error.password && (
          <span className="form-label-error">{error.password[0]}</span>
        )}
      </div>
      
      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit" disabled={registering}>
          {registering ? "veuillez patienter..." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default FormContent;
