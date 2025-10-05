import { useCookies } from "react-cookie";

function IsLogedIn()
{
    let [cookies, setCookies] = useCookies('user');
    if(cookies.userid === undefined)
    {
        alert("Please Log In");
        window.location = '/';
    }
}
export default IsLogedIn;