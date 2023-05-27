import axios from "../../../../pages/api/axios";
import { useAuthContext } from "../../../Context/AuthContext";
import { useState } from "react";

const FormContent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { csrf } = useAuthContext();

  const submitForm = async (e) => {
    e.preventDefault();
    await csrf();
    setError([]);
    setStatus(null);
    setLoading(true); // Start loading

    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="form-inner">
      <h3>mot de passe oublié</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Address Email</label>
          <input
            id="email"
            type="email"
            value={email}
            className="block mt-1 w-full"
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
            autoComplete="off"
          />
          {error.email && (
            <span className="form-label-error">{error.email[0]}</span>
          )}
          {status && <span className="accepter">{status}</span>}
        </div>
        {/* email */}

        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            disabled={loading} // Disable button while loading
          >
            {loading ? "veuillez patienter..." : "envoyer le lien"} {/* Update button text */}
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
