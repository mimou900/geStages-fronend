import { useContext, useEffect, useState } from "react";
import StagesContext from "../../../../Context/StagesContext";
import { useAuthContext } from "../../../../Context/AuthContext";

const SocialNetworkBox = () => {
  const { etudiant, getEtudiant, CompleteProfile, showMessage, setShowMessage, getCsrfToken } = useContext(StagesContext);
  const { user, getUser, error } = useAuthContext();
  const [dateNaissance, setDateNaissance] = useState('');
  const [numCarte, setNumCarte] = useState('');
  const [numSocial, setNumSocial] = useState('');
  const [numTel, setNumTel] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
     await  getCsrfToken();
      await getUser();
      if (user?.id) {
        await getEtudiant(user.id);
        setId(user.id)
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [showMessage]);

  const handleSubmit = async event => {
await getCsrfToken();
    event.preventDefault();

    await CompleteProfile({
      id,
      dateNaissance,
      numCarte,
      numSocial,
      numTel
    });
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Date De Naissance</label>
          <input
            type="text"
            name="dateNaissance"
            value={dateNaissance}
          onChange={event => setDateNaissance(event.target.value)}
            placeholder={etudiant?.dateNaissance}
          />
          {showMessage && <div className="accepter">Bien enregistré</div>}
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero du Carte</label>
          <input
            type="text"
            name="numCarte"
            value={numCarte}
          onChange={event => setNumCarte(event.target.value)}
            placeholder={etudiant?.numCarte}
          />
          {showMessage && <div className="accepter">Bien enregistré</div>}
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero Social</label>
          <input
            type="text"
            name="numSocial"
            value={numSocial}
          onChange={event => setNumSocial(event.target.value)}
            placeholder={etudiant?.numSocial}
          />
          {showMessage && <div className="accepter">Bien enregistré</div>}
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numero Telephone</label>
          <input
            type="text"
            name="numTel"
            value={numTel}
          onChange={event => setNumTel(event.target.value)}
            placeholder={etudiant?.numTel}
          />
          {showMessage && <div className="accepter">Bien enregistré</div>}
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
