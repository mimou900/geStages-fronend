import { useContext, useEffect, useState } from "react";
import StagesContext from "../Context/StagesContext";
import { useAuthContext } from "../Context/AuthContext";
useAuthContext

const BreadCrumb = ({ title = "" }) => {
const {user, getUser} = useAuthContext();
const { etudiant, getEtudiant, Style1, checkProfileIfCompleted, val} = useContext(StagesContext);


useEffect(() => {
  checkProfileIfCompleted();
}, [etudiant]);

useEffect(() => {
  const fetchData = async () => {
    if (user?.id) {
      await getEtudiant(user.id);
      checkProfileIfCompleted();
    }
  };
  fetchData();
  }, []);


  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className={Style1}>{val}</div>
    </div>
  );
};

export default BreadCrumb;
