import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";
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
        <div>
            <h2>DAFTAR</h2>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
            <form className="">
                <div>
                    <label>Nama:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="button" onClick={handleRegister} disabled={loading}>
                    {loading ? "Mendaftarkan Akun..." : "Daftar"}
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
