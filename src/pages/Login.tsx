import {useContext} from "react";
import AuthStore from "../store/AuthStore.tsx";
import {useNavigate} from "react-router-dom";

function Login() {
    const authStoreValue = useContext(AuthStore);
    const navigate = useNavigate();
    const onLoginClick = () => {
        authStoreValue?.setIsAuthenticated(true);
        navigate("/")
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={onLoginClick}>Let me in</button>
        </>
    )
}

export default Login;