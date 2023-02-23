import {useState} from 'react';
import LoginForm from './LoginForm';
import './Login.css';

function Login() {
    const adminUser = {
        email: "cook@etit.com",
        password: "cook123"
    }

    const [user, setUser] = useState({name:"", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged in!")
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            setError("Details do not match!")
        }
    }

    const Logout = () => {
        setUser({
            name: "",
            email: ""
        })    }

    return (
        <>
            <div className="App">
                {(user.email !== "") ? (
                    <div className="welcome">
                        <h2> Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}> Logout </button>
                    </div>
                    ) : <LoginForm Login={Login} error={error}></LoginForm> }
            </div>
        </>
    )
}

export default Login;