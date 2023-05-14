import { useContext, useEffect } from "react";
import StagesContext from "../../../../Context/StagesContext";

const SocialNetworkBox = () => {
  
  const {etudiant, getEtudiant, formProfileValues, onChanging, CompleteProfile, id, message, showMessage, setShowMessage} = useContext(StagesContext);
  useEffect(() => {
    getEtudiant(id);
  }, []);
  

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [showMessage]);

  return (
    <form className="default-form" onSubmit={CompleteProfile}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Date De Naissance</label>
          <input
            type="text"
            name="dateNaissance"
            value={formProfileValues["dateNaissance"]}
          onChange={onChanging}  
            placeholder={etudiant.dateNaissance}
          />
           <>
      {showMessage && (
        <div className="accepter">
          bien enregistre
        </div>
      )}
    </>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero du Carte</label>
          <input type="text" 
          name="numCarte" 
          value={formProfileValues["numCarte"]}
          onChange={onChanging}  
          placeholder={etudiant.numCarte} />
<>
      {showMessage && (
        <div className="accepter">
          bien enregistre
        </div>
      )}
    </>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero Social</label>
          <input type="text" 
          name="numSocial" 
          value={formProfileValues["numSocial"]}
          onChange={onChanging}  
          placeholder={etudiant.numSocial} />
          <>
      {showMessage && (
        <div className="accepter">
          bien enregistre
        </div>
      )}
    </>
        </div>
        
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero Telephone</label>
          <input type="text" 
          name="numTel" 
          value={formProfileValues["numTel"]}
          onChange={onChanging}  
          placeholder={etudiant.numTel}
           />
           <>
      {showMessage && (
        <div className="accepter">
          bien enregistre
        </div>
      )}
    </>
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

export default SocialNetworkBox;
