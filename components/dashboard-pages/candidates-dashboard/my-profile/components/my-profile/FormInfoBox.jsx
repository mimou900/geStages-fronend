import Select from "react-select";
import { useContext, useEffect } from "react";
import StagesContext from "../../../../../Context/StagesContext";
import { useAuth } from "../../../../../../pages/api/useAuth";
import { useAuthContext } from "../../../../../Context/AuthContext";

const FormInfoBox = () => {
  const { user, getUser } = useAuthContext();
  const { etudiant, getEtudiant } = useContext(StagesContext);

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
      if (user?.id) {
        await getEtudiant(user.id);
      }
    };

    fetchData();
  }, []);
  return (
    
    <form action="#" className="default-form">
      <div className="row ">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12 ">
          <label>Nom</label>
          <input type="text" 
          name="name" 
          value={user?.name}
          className="not-allowed"
          readOnly="readOnly"/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12 ">
          <label>Prenom</label>
          <input type="text" 
          name="name" 
          className="not-allowed"
          value={user?.prenom} 
          readOnly="readOnly"/>
        </div>

        
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Address Email</label>
          <input
          className="not-allowed"
            type="text"
            name="name"
            value={user?.email} 
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
