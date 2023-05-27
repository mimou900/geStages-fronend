import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Terminer from "../../../components/dashboard-pages/maitre-dashboard/terminer";

const index = () => {
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <Terminer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
