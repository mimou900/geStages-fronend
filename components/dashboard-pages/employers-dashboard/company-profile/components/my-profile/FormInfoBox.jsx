import Select from "react-select";
import { useAuthContext } from "../../../../../Context/AuthContext";

const FormInfoBox = () => {
    const {user} = useAuthContext();
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
        <form className="default-form">
            <div className="row">
                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Nom d'Universite </label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                    />
                </div> */}

                
                
                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={user?.name}
          className="not-allowed"
          readOnly="readOnly"
                    />
                </div>
                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Prenom </label>
                    <input
                        type="text"
                        name="name"
                        value={user?.prenom}
          className="not-allowed"
          readOnly="readOnly"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Address Email </label>
                    <input
                        type="text"
                        name="name"
                        value={user?.email}
          className="not-allowed"
          readOnly="readOnly"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Mot de pass actuel</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Nouveau Mot de pass</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Confirmation du Mot de pass</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Team Size</label>
                    <select className="chosen-single form-select" required>
                        <option>50 - 100</option>
                        <option>100 - 150</option>
                        <option>200 - 250</option>
                        <option>300 - 350</option>
                        <option>500 - 1000</option>
                    </select>
                </div> */}

                {/* <!-- Search Select --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Multiple Select boxes </label>
                    <Select
                        defaultValue={[catOptions[2]]}
                        isMulti
                        name="colors"
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Allow In Search & Listing</label>
                    <select className="chosen-single form-select">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div> */}

                {/* <!-- About Company --> */}
                {/* <div className="form-group col-lg-12 col-md-12">
                    <label>About Company</label>
                    <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                </div> */}

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button className="theme-btn btn-style-one">Save</button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;
