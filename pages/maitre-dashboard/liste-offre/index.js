import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ListeOffre from "../../../components/dashboard-pages/maitre-dashboard/liste-offre";

const index = () => {
  return (
    <>
      <Seo pageTitle="Post Jobs" />
      <ListeOffre />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
