import { useState, createContext } from "react";
import axios from "../../pages/api/axios";
import { useRouter } from 'next/navigation';



const StagesContext = createContext();
export const StagesProvider = ({children}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [val, setVal] = useState("");
  const [Style1, setStyle1] = useState("");
  const [stages, setStages] = useState([]);
    const [etudiants, setEtudiants] = useState([]);
    const [stage, setStage] = useState([]);
    const [error, setError] = useState([]);
    const router = useRouter();
    const [etudiant, setEtudiant] = useState([]);
    const[message, setMessage] = useState();

   


    const getStages = async (id) => {
      try {
        const apiStages = await axios.get("api/Etudiant/stages/"+id);
        setStages(apiStages.data);
      } catch (error) {
        console.error(error);
      }
    };
      const getEtudiants = async () => {
        try {
          const apiEtudiants = await axios.get("api/Etudiants");
          setEtudiants(apiEtudiants.data);
        } catch (error) {
          console.error(error);
        }
      };
    const getStage = async (id) => {
        const response = await axios.get("api/stages/" + id);
        setStage(response.data);
      };

      const getEtudiant = async (id) => {
        const response = await axios.get("api/Etudiant/" + id);
        setEtudiant(response.data);
      };


      
      
      const addStage = async (formValues) => {
        await getCsrfToken();
      
        try {
          await axios.post("api/addStage", formValues);
          router.push('/candidates-dashboard/applied-jobs');
        } catch (e) {
          if (e.response && e.response.status === 442) {
            setError(e.response.data.errors);
          }
        }
      };
      
      
    const [formProfileValues, setFormProfileValues] = useState({
        dateNaissance: "",
        numCarte: "",
        numSocial: "",
        numTel: "",
      });
      
    
      const onChanging = (e) => {
        const { name, value } = e.target;
      
        if (value !== "") {
          setFormProfileValues({ ...formProfileValues, [name]: value });
        }
      };
      

// Fetch CSRF token
const getCsrfToken = () => axios.get('/sanctum/csrf-cookie');




const CompleteProfile = async ({ id, dateNaissance, numCarte, numSocial, numTel }) => {
  await getCsrfToken();
  try {
    await axios.put("/api/Etudiant/completer-mon-profile/"+id, { dateNaissance, numCarte, numSocial, numTel });
    setMessage("bien change");
    setShowMessage(true);
  } catch (e) {
    if (e) {
      console.log('retry')
    }
  }
};

  const checkProfileIfCompleted = async() => {
    await getCsrfToken();
    var valu = etudiant.dateNaissance;
    var v2 = etudiant.numCarte;
    var v3 = etudiant.numSocial;
    var v1 = etudiant.numTel;
  
    if (valu == null || v1 == null || v2 == null || v3 == null) {
      setVal("important: completer votre profile !");
      setStyle1("rejeter");
    } else {
      setVal("");
      setStyle1("accepter");
    }
  };

    return <StagesContext.Provider value={{
        stage, 
        stages, 
        error,
        getStage, 
        getStages, 
         
        addStage,
        getEtudiant,
        etudiant,
        formProfileValues,
        onChanging,
        CompleteProfile,
        message,
        Style1,
        checkProfileIfCompleted,
        val,
        showMessage,
        setShowMessage,
        etudiants,
        getCsrfToken,
        getEtudiants,
        
    }}>{children}</StagesContext.Provider>
}

export default StagesContext