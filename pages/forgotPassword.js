import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import ForgotPassword from "../components/pages-menu/forgotPassword";

const index = () => {
  return (
    <>
      <Seo pageTitle="Faq" />
      <ForgotPassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
