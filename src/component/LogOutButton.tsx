import {useContext} from "react";
import AuthStore from "../store/AuthStore.tsx";
import {useNavigate} from "react-router-dom";

function LogOutButton() {
    const authStoreValue = useContext(AuthStore);
    const navigate = useNavigate();
    const logOut = () => {
        authStoreValue?.setIsAuthenticated(false);
        navigate("/login");
    }
    return (<>
        <button onClick={logOut}>Log out</button>
    </>)
}
export default LogOutButton;