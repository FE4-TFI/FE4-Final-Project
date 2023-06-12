import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import notif from "../hooks/notif"

function Login(){
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const inputUsername = (event) => {
        // console.log(event.target.value);
        if ((event.target.value) !== null){
            setUsername(event.target.value)
        }
    }

    const inputPassword = (event) => {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    const Register = (event) => {
        event.preventDefault()
        console.log("username", username)
        console.log("password", password)
        
        const akun ={
            "username" : username,
            "password" : password,
        }

        axios.post("https://64512af1e1f6f1bb22a9f2c1.mockapi.io/savi/artikel",akun)
    }

    const [isDone, setIsDone] = useState([])
    useEffect(() => {
        axios("https://64512af1e1f6f1bb22a9f2c1.mockapi.io/savi/artikel")
        .then(({data}) => setIsDone(data))
        .catch(err => console.log(err))
    },[]);
    console.log(isDone)

    const login = (event) => {
        event.preventDefault()
        navigate("/")
    }

    // console.log(username)
    // console.log(password)

    return(
        <>
        <form className="form-register" onSubmit={Register}>
            <div className="username">
                <label>Username</label>
                <input type="text" placeholder="Masukkan username" value={username} onChange={inputUsername}/>

            </div>
            
            <div className="password">

                <label>Password</label>
                <input type="password" placeholder="Masukkan password" value={password} onChange={inputPassword} />

            </div>
            
            <button className="btn-register">Register</button>
        </form>


        {isDone.length === 0 ? <div className="api-register"><span>Loading...</span></div> :
                isDone.map((item, index)=> (
                    <div className="done-register" key={index}>

                    </div>
                ),[])
        }
        </>
    );
}
export default Login