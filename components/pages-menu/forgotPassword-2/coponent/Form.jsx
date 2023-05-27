import { useState } from "react";
import axios from "../../../../pages/api/axios";
import { useAuthContext } from "../../../Context/AuthContext";

const FormContent = ({ token, email }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { csrf } = useAuthContext();

  const submitForm = async (e) => {
    e.preventDefault();
    await csrf();
    setError({});
    setStatus(null);
    setLoading(true);

    try {
      const response = await axios.post("/forgot-password", {
        email,
        token,
        password,
        password_confirmation: passwordConfirmation,
      });
      setStatus(response.data.status);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-inner">
      <h3>Mot de passe oublié</h3>

      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password}
            className="block mt-1 w-full"
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
          />
          {error.password && (
            <span className="form-label-error">{error.password[0]}</span>
          )}
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            className="block mt-1 w-full"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            autoComplete="new-password"
          />
          {error.password_confirmation && (
            <span className="form-label-error">
              {error.password_confirmation[0]}
            </span>
          )}
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            disabled={loading}
          >
            {loading ? "Veuillez patienter..." : "Envoyer le lien"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContent;
