import { useRouter } from 'next/router';
import { useAuthContext } from '../Context/AuthContext';

const AuthLayout = () =>{
    const router = useRouter();
    const { user } = useAuthContext();
    return user ? <Outlet/> : router.push('/login')
}

export default AuthLayout;