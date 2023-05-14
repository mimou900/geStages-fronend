import { useContext, useEffect, useState } from "react";
import StagesContext from "../Context/StagesContext";

const BreadCrumb = ({ title = "" }) => {

const { etudiant, getEtudiant, Style1, checkProfileIfCompleted, val} = useContext(StagesContext);

useEffect(() => {
  getEtudiant(2)
    .then(() => {
      checkProfileIfCompleted();
    });
}, []);

useEffect(() => {
  checkProfileIfCompleted();
}, [etudiant]);





  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className={Style1}>{val}</div>
    </div>
  );
};

export default BreadCrumb;
