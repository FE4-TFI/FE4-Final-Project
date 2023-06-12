import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        navigate("/")
    }

    return(
        <>
        <form className="form-login" onSubmit={login}>
            <div className="username">

                <label>Username</label>
                <input type="text" placeholder="Masukkan username" />

            </div>
            
            <div className="password">

                <label>Password</label>
                <input type="password" placeholder="Masukkan password" />

            </div>
            
            <button>Login</button>
        </form>
        </>
    );
}
export default Login