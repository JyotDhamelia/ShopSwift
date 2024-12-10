import { useCookies } from 'react-cookie'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Logout()
{
    useEffect(() => {
        // You can call the navigate function here if needed
        navigate('/');
      }, []);

    //create function 
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    removeCookie("userid");
    alert("Logout Successfull");
}
export default Logout;