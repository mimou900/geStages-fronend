import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Ajouter from "../../../components/dashboard-pages/maitre-dashboard/ajouter-stage";

const index = () => {
  return (
    <>
      <Seo pageTitle="Ajouter stage" />
      <Ajouter />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
