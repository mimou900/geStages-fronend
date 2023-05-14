import Select from "react-select";
import { useContext, useEffect } from "react";
import StagesContext from "../../../../../Context/StagesContext";
const FormInfoBox = () => {

  const {etudiant, getEtudiant, id} = useContext(StagesContext);
  useEffect(() => {
  

    getEtudiant(id);
  }, []);



  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    
    <form action="#" className="default-form">
      <div className="row ">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12 ">
          <label>Nom</label>
          <input type="text" 
          name="name" 
          value={etudiant.nom}
          className="not-allowed"
          readOnly="readOnly"/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12 ">
          <label>Prenom</label>
          <input type="text" 
          name="name" 
          className="not-allowed"
          value={etudiant.prenom} 
          readOnly="readOnly"/>
        </div>

        
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Address Email</label>
          <input
          className="not-allowed"
            type="text"
            name="name"
            placeholder="creativelayers"
            readOnly="readOnly"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Mot de pass actuel</label>
          <input
            type="password"
            name="name"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Nouveau Mot de pass</label>
          <input
            type="password"
            name="name"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Confirmation du Mot de pass</label>
          <input
            type="password"
            name="name"
          />
        </div>

        
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
    
  );
};

export default FormInfoBox;
