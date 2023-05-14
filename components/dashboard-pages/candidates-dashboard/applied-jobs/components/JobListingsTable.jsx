import Link from "next/link";
import axios from "axios";
import StagesContext from "../../../../Context/StagesContext";
import { useContext, useEffect, useState } from "react";

const JobListingsTable = () => {
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [style3, setStyle3] = useState("");

  const { stages, getStages } = useContext(StagesContext);

  useEffect(() => {
    getStages();
  }, []);

  useEffect(() => {
    stylingProgress();
  }, [stages]);

  const stylingProgress = () => {
    stages.forEach((stage) => {
      var valu = stage.AvisChef;
      var valu1 = stage.AvisMaitre;
      var valu2 = stage.statut;

      if (valu === "en attente") {
        setStyle1("Possecing");
      }else if(valu === "Accepté") {
        setStyle1("accepter");
      }else{
        setStyle1("rejeter");
      }

      if (valu1 === "en attente") {
        setStyle2("Possecing");
      }else if(valu1 === "Accepté") {
        setStyle2("accepter");
      }else{
        setStyle2("rejeter");
      }

      if (valu2 === "en attente") {
        setStyle3("Possecing");
      }else if(valu2 === "Accepté") {
        setStyle3("accepter");
      }else{
        setStyle3("rejeter");
      }
      
    });
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Date de demande</th>
                <th>Avis chef</th>
                <th>Avis maitre</th>
                <th>Avis finale</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((stage) => (
                <tr key={stage.id}>
                  <td>
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img src="/images/logo.png" alt="logo" />
                          </span>
                          <h4>
                            <Link href={`/job-single-v3/5`}>{stage.titre}</Link>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              Segment
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              Constantine, DZ
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{stage.dateDemande}</td>
                  <td className={style1}>{stage.AvisChef}</td>
                  <td className={style2}>{stage.AvisMaitre}</td>
                  <td className={style3}>{stage.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListingsTable;
