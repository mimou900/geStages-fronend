import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MonProfile from "../../../components/dashboard-pages/maitre-dashboard/mon-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="Company Profile" />
      <MonProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
