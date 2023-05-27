import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import EnCourt from "../../../components/dashboard-pages/maitre-dashboard/en-court";

const index = () => {
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <EnCourt />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
