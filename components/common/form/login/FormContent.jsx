import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useState } from "react";
import axios from "../../../../pages/api/axios";
import { useRouter } from 'next/navigation';
import useAuth from "../../../../pages/api/useAuth";

const FormContent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState([])

  const {login, isLoading, user} = useAuth({middleware: 'guest'})

  const submitForm = async event => {
      event.preventDefault()

      login({email, password, remember, setErrors});
  }

  if (isLoading || user) {
      return <>Loading...</>
  }
  return (
    <div className="form-inner">
      <h3>Se connecter a geStage</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Address Email</label>
          <input 
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full"
          onChange={event => setEmail(event.target.value)}
          required
          autoFocus
          autoComplete="off" />
          <span className="form-label-error">{errors}</span>
        </div>
        {/* email */}
 
        <div className="form-group">
          <label>Mot de pass</label>
          <input 
          id="password"
          type="password"
          value={password}
          className="block mt-1 w-full"
          onChange={event => setPassword(event.target.value)}
          required
          autoComplete="current-password" />
          <span className="form-label-error">{errors}</span>
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
