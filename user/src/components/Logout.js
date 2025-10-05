import { useCookies } from 'react-cookie'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout()
{
    useEffect(() => {
        navigate('/');
      }, []);

    //create function 
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    removeCookie("userid");
}
export default Logout;