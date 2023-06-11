import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./redux/authSlice";
import { Link } from "react-router-dom";
Link

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRegister = async () => {

        setErrorMessage("");
        setSuccessMessage("")
        if (!username) {
            setErrorMessage("Username masih kosong");
            return;
        }

        if (!email) {
            setErrorMessage("Email masih kosong");
            return;
        }
        if (!email.includes("@")) {
            setErrorMessage("Email tidak valid");
            return;
        }

        if (!password) {
            setErrorMessage("Password masih kosong");
            return;
        }

        setLoading(true);
        const userData = {
            username: username,
            password: password,
            email: email,
        };
        try {
            await dispatch(registerUser(userData));
            setLoading(false);
            setSuccessMessage("Pendafaran Berhasi!");
            // Reset form fields if needed
            setUsername("");
            setPassword("");
            setEmail("");
        } catch (error) {
            setLoading(false);
            setErrorMessage("Pendaftaran Gagal.");
            // Handle error if needed
        }
    };

    return (
        <div className="container bg-light border-light-subtle rounded mt-5">
            <div className="py-2">
                <h2 className="text-center mt-2">DAFTAR</h2>
                {successMessage && <p className="text-center mt-1">{successMessage}</p>}
                {errorMessage && <p className="text-center mt-1">{errorMessage}</p>}
            </div>
            <form className="form-group custom-form">
                <div>
                    <label>Username</label>
                    <input className="form-control" type="text" placeholder="Masukkan Nama User" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input className="form-control" placeholder="Masukkan Email" type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control" placeholder="Masukkan Password" type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="btn btn-success btn-primary mb-5" type="button" onClick={handleRegister} disabled={loading}>
                    {loading ? "Mendaftarkan Akun..." : "Daftar"}
                </button>
            </form>
            <p>
                Sudah punya akun? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;