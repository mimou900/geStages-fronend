import React, { useContext, useEffect, useState } from "react";
import { useAuthContext } from "../../../../Context/AuthContext";
import StagesContext from "../../../../Context/StagesContext";
import Link from "next/link";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from "../../../../../pages/api/axios";
import Alert from '@mui/material/Alert';
const JobListingsTable = () => {
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [style3, setStyle3] = useState("");
  const { user, getUser } = useAuthContext();
  const { stages, getStages, getCsrfToken } = useContext(StagesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showNoDataMessage, setShowNoDataMessage] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State variable for success alert

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUser();
        getStages(user?.id);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stages.length > 0) {
      setShowNoDataMessage(false);
    }
  }, [stages]);

  const getStyle1 = (stage) => {
    if (stage.AvisChef === "en attente") {
      return "Possecing";
    } else if (stage.AvisChef === "Accepté") {
      return "accepter";
    } else {
      return "rejeter";
    }
  };

  const getStyle2 = (stage) => {
    if (stage.AvisMaitre === "en attente") {
      return "Possecing";
    } else if (stage.AvisMaitre === "Accepté") {
      return "accepter";
    } else {
      return "rejeter";
    }
  };

  const getStyle3 = (stage) => {
    if (stage.statut === "Accepté") {
      return "accepter";
    } else if (stage.statut === "en attente") {
      return "Possecing";
    } else {
      return "rejeter";
    }
  };
  
  const valider = async (id) => {
    await getCsrfToken();
    try {
      await axios.put("api/stage/valider/"+id);
      getStages(user?.id);
      setShowSuccessAlert(true); // Show success alert
    } catch (e) {
      if (e) {
        console.log('retry')
      }
    }
  };
  
  const handleConfirmation = (stageId, stageTitre) => {
    confirmAlert({
      title: 'Vous êtes sûr ?',
      message: 'Vous allez valider '+stageTitre+', vous ne pourrez pas modifier ce choix.',
      buttons: [
        {
          label: 'Valider',
          onClick: () => valider(stageId)
        },
        {
          label: 'Annuler',
          onClick: () => {},
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My condidature</h4>
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
      {showSuccessAlert && ( 
        <Alert severity="success">votre stage a ete valider</Alert>
      )}
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Date de demande</th>
                <th>Avis chef</th>
                <th>Avis maître</th>
                <th>Avis finale</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : showNoDataMessage ? (
                <tr>
                  <td colSpan="6">Vous n'avez aucun stage.</td>
                </tr>
              ) : (
                stages.map((stage) => (
                  <tr key={stage.id}>
                    <td>
                      <div className="job-block">
                        <div className="inner-box">
                          <h4>
                            <Link href={`/job-single-v3/${stage.id}`}>
                              {stage.titre}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td>{stage.dateDemande}</td>
                    <td className={getStyle1(stage)}>{stage.AvisChef}</td>
                    <td className={getStyle2(stage)}>{stage.AvisMaitre}</td>
                    <td className={getStyle3(stage)}>{stage.statut}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            {stage.statut === "Accepté" && (
                              <button
                                data-text="Valider mon choix"
                                onClick={() => handleConfirmation(stage.id, stage.titre)}
                              >
                                <span className="la la-check"></span>
                              </button>
                            )}
                          </li>
                          <li>
                            <button data-text="Voir L'aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default JobListingsTable;
