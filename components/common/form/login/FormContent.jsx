import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { useRouter } from "next/router";

const FormContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, user } = useAuthContext();
  const [loggingIn, setLoggingIn] = useState(false);
  const router = useRouter(); 
  const submitForm = async (event) => {
    event.preventDefault();
    setLoggingIn(true);

    await login({
      email,
      password,
    });
    setEmail('')
    setPassword('')
    
    setLoggingIn(false);
  };

  useEffect(() => {
    if (user) {
      // User is authenticated, redirect based on role
      if (user.role === 1) {
        router.push("employers-dashboard/dashboard"); // Redirect to admin dashboard
      } else if (user.role === 2) {
        router.push("candidates-dashboard/dashboard"); // Redirect to candidate dashboard
      } else if (user.role === 3){
        router.push("maitre-dashboard/dashboard"); // Redirect to default page
      }
    }
  }, [user, router]);

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
            autoFocus
            autoComplete="off"
          />
          {error.email && (
            <span className="form-label-error">{error.email[0]}</span>
          )}
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
            autoComplete="current-password"
          />
          {error.password && (
            <span className="form-label-error">{error.password[0]}</span>
          )}
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
            <a href="/forgotPassword" className="pwd">
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
            disabled={loggingIn}
          >
            {loggingIn ? "veuillez patienter..." : "Log In"}
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
