import { useContext } from "react";
// import StagesContext from "../../../../Context/StagesContext";

const index = () => {
//   const {formValues, onChange, addStage} = useContext(StagesContext);


  return (
    <form className="default-form" >
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Le Titre De Stage</label>
          <input type="text" 
          name="titre" 
          placeholder="Stage en Informatique"  />
        </div>
        {/* <!-- Input --> */}

        <div className="form-group col-lg-12 col-md-12">
          <label>Plan de Stage</label>
          <textarea 
          name="description" 
        //   value={formValues["description"]} 
          placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>La date de debut</label>
          <input type="text" 
          name="dateDebut" 
        //   value={formValues["dateDebut"]} 
          placeholder="2023-04-02"  />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>La date de fin</label>
          <input type="text" 
          name="dateFin" 
        //   value={formValues["dateFin"]} 
          placeholder="2023-04-02"  />
        </div>


        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
        {/* <!-- Input --> */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default index;
