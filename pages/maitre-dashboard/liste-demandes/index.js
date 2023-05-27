import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ListeDemandes from "../../../components/dashboard-pages/maitre-dashboard/liste-demandes";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ListeDemandes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
