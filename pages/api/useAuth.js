import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;


export default function useAuth({middleware} = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware == 'guest' && user) router.push('/')
        if (middleware == 'auth' && !user && error) router.push('/login')
    })
    const {data: user, error, mutate} = useSWR('/user',
        () => axios.get('api/user').then(response => response.data.data)
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({ setErrors, ...props }) => {
        try {
          setErrors([]);
      
          await csrf();
      
          await axios.post('api/login', props);
      
          mutate();
          router.push('/candidates-dashboard/dashboard');
        } catch (error) {
        }
      };
      

    const logout = async () => {
        await axios.post('/logout')

        mutate(null)

        router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout,
        isLoading
    }
}