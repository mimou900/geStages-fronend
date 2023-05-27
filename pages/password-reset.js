import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Seo from "../components/common/Seo";
import ForgotPassword from "../components/pages-menu/forgotPassword-2";

const IndexPage = () => {
  const router = useRouter();
  const { token, email } = router.query;

  return (
    <>
      <Seo pageTitle="Faq" />
      <ForgotPassword token={token} email={email} />
    </>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), { ssr: false });
