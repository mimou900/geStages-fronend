import Map from "../../../Map";
import Select from "react-select";

const ContactInfoBox = () => {
  const catOptions = [
    { value: "constantine 1", label: "constantine 1" },
    { value: "constantine 2", label: "constantine 2" },
    { value: "constantine 3", label: "constantine 3" },
];
const catOptions1 = [
  { value: "nouvelles technologies", label: "nouvelles technologies" },
  { value: "sciences humaines et sociales", label: "sciences humaines et sociales" },
  { value: "psychologie", label: "psychologie" },
];
const catOptions2 = [
  { value: "Tronc Commun INFO : Licence Informatique", label: "Tronc Commun INFO : Licence Informatique" },
  { value: "Informatique Fondamentale et ses Applications IFA", label: "Informatique Fondamentale et ses Applications IFA" },
  { value: "Technologies des Logiciels et des Systèmes d’Information TLSI", label: "Technologies des Logiciels et des Systèmes d’Information TLSI" },
];

  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
                    <label>université</label>
                    <Select
                        defaultValue={[catOptions[1]]}
                        
                        name="colors"
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
                    <label>Faculté</label>
                    <Select
                        
                        
                        name="colors"
                        options={catOptions1}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
                    <label>Departement</label>
                    <Select
                        name="colors"
                        options={catOptions2}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>


        {/* <!-- Input --> */}
        
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
