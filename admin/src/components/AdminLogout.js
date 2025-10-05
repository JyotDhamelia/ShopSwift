import { useCookies } from "react-cookie";

function AdminLogout() {
    const [cookies, setCookies, removeCookie] = useCookies('user');
    removeCookie('userid');
    window.location = '/';
}

export default AdminLogout;