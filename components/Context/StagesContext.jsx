import { useState, createContext } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
import { useRouter } from 'next/navigation';

const StagesContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {localStorage.getItem('ACCESS_TOKEN')},
});
export const StagesProvider = ({children}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [val, setVal] = useState("");
  const [Style1, setStyle1] = useState("");
    const [stages, setStages] = useState([]);
    const [stage, setStage] = useState([]);
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const[user, setUser] = useState({});
    const[token, _setToken] = useState();
    const [etudiant, setEtudiant] = useState([]);
    var id = 2;
    const[message, setMessage] = useState();

    const setToken = (token) => {
        _setToken(token)
        if (token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }


    const getStages = async () => {
        try {
          const apiStages = await axios.get("api/stages");
          setStages(apiStages.data);
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


      const [formValues, setFormValues] = useState({
        titre: "",
        dateDebut: "",
        dateFin: "",
        description: "",
      });
      
    
      const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const addStage = async (e) => {
        e.preventDefault();
        try {
          await axios.post("api/addStage", formValues);
          getStages();
          router.push("/candidates-dashboard/applied-jobs");
        } catch (e) {
          if (e.response.status === 442) {
            setErrors(e.response.data.errors);
          }
        }
      };
    //complete profile
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
const getCsrfToken = async () => {
  
    await axios.get("/sanctum/csrf-cookie");
    
};



    
const CompleteProfile = async (e) => {
    e.preventDefault();
    await getCsrfToken();
    try {
      await axios.put("/api/Etudiant/completer-mon-profile/"+id, formProfileValues);
      setMessage("bien change");
      setShowMessage(true);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  
  const checkProfileIfCompleted = () => {
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

    return <StagesContext.Provider value={{user, 
        token, 
        setUser, 
        setToken, 
        stage, 
        stages, 
        getStage, 
        getStages, 
        onChange, 
        formValues, 
        addStage,
        getEtudiant,
        etudiant,
        formProfileValues,
        onChanging,
        CompleteProfile,
        id,
        message,
        Style1,
        checkProfileIfCompleted,
        val,
        showMessage,
        setShowMessage,
    }}>{children}</StagesContext.Provider>
}

export default StagesContext