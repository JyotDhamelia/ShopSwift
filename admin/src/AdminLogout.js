import { useCookies } from "react-cookie";

function AdminLogout() {
    const [cookies, setCookies, removeCookie] = useCookies('user');
    removeCookie('userid');
    // alert('Logout Successfull');
    window.location = '/';
}

export default AdminLogout;