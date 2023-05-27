import { useContext, useEffect, useState } from "react";
import StagesContext from "../../../../Context/StagesContext";
import { useAuthContext } from "../../../../Context/AuthContext";

const Index = () => {
  const { getCsrfToken, addStage } = useContext(StagesContext);
  const { user, getUser } = useAuthContext();
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
      setFormValues({
        titre: "",
        dateDebut: "",
        dateFin: "",
        description: "",
        maitreEmail: "",
        etudiant_id: user?.id,
      });
    };

    fetchData();
  }, []);

  const formSubmit = async (event) => {
    event.preventDefault();
    await getCsrfToken();
    addStage(formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="default-form" onSubmit={formSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Le Titre De Stage</label>
          <input
            type="text"
            name="titre"
            value={formValues["titre"]}
            onChange={handleChange}
            placeholder="Stage en Informatique"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Plan de Stage</label>
          <textarea
            name="description"
            value={formValues["description"]}
            onChange={handleChange}
            placeholder="Spent several years working on sheep on Wall Street..."
            required
          ></textarea>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>L'email de maitre de stage</label>
          <input
            type="text"
            name="maitreEmail"
            value={formValues["maitreEmail"]}
            onChange={handleChange}
            placeholder="maite.stage@exemple.com"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>La date de debut</label>
          <input
            type="text"
            name="dateDebut"
            value={formValues["dateDebut"]}
            onChange={handleChange}
            placeholder="2023-04-02"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>La date de fin</label>
          <input
            type="text"
            name="dateFin"
            value={formValues["dateFin"]}
            onChange={handleChange}
            placeholder="2023-04-02"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Index;
