import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Header from "./coponent/Header";
import FormContent from "./coponent/Form";
const ForgotPassword = ({ token, email }) => {
  return (
    <>
      <Header />
      <LoginPopup />
      <MobileMenu />

      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(images/background/12.jpg)" }}
        ></div>
        <div className="outer-box">
          <div className="login-form default-form">
            <FormContent token={token} email={email} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
