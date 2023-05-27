import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Crer un compte admin chez geStage</h3>
<span className="rejeter">se lien est avec un acces limitee</span>
      <Tabs>
        <div className="form-group register-dual">
        <label>Vous etes:</label>
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> chef de departement
              </button>
              <TabPanel>
          <Form />
        </TabPanel>
            </Tab>

          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End cadidates Form */}

        
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
