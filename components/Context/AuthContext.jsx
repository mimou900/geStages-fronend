import { createContext, useContext, useState } from "react";
import axios from "../../pages/api/axios";
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [error, setError] = useState([]);

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const getUser = async () => {
    const { data } = await axios.get('/api/user');
    setUser(data);
  };

  const login = async ({ email, password }) => {
    await csrf();
    try {
         await axios.post('/login', { email, password });
        // router.push('/candidates-dashboard/dashboard');
    //   if (user.role === 3) {
    //     router.push('/candidates-dashboard/dashboard');
    //   }
    //  else if (user.role === 3) {
    //     router.push('/maitre-dashboard/dashboard');
    //   } else if (user.role === 1) {
    //     router.push('/employers-dashboard/dashboard');
    //   }

      await getUser();
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  const RegisterEtudiant = async ({ name, email, password, prenom }) => {
    await csrf();
    try {
      await axios.post('/register', { role: 2, name, email, password, prenom });
      await getUser();
      router.push('/candidates-dashboard/dashboard');
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  const RegisterAdmin = async ({ name, email, password, prenom }) => {
    await csrf();
    try {
      await axios.post('/register', { role: 1, name, email, password, prenom });
      await getUser();
      router.push('/employers-dashboard/dashboard');
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  const RegisterMaitre = async ({ name, email, password, prenom }) => {
    await csrf();
    try {
      await axios.post('/register', { role: 3, name, email, password, prenom });
      await getUser();
      router.push('/maitre-dashboard/dashboard');
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  const logout = () => {
    axios.post('/logout').then(() => {
        setUser(null);
        router.push("/login");
    })
  }

  return (
    <AuthContext.Provider value={{ user,
     error, 
     csrf,
     getUser, 
     login, 
     RegisterEtudiant, 
     RegisterMaitre, 
     logout,
     RegisterAdmin,

      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
