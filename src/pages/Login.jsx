import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        setLoading(true);
        const userData = {
            username: username,
            password: password,
        };
        try {
            // Menggunakan API untuk validasi login
            const response = await axios.get(
                `https://6451089fe1f6f1bb22a608b7.mockapi.io/users?username=${username}&password=${password}`
            );
            if (response.data.length === 0) {
                throw new Error("Username atau password tidak valid");
            }
            const user = response.data[0];
            if (user.password !== password) {
                throw new Error("Username atau password tidak valid")
            }

            await dispatch(loginUser(userData));
            setLoading(false);
            setUsername("");
            setPassword("");
            navigate("/"); // Navigate to home page after successful login
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message || "Login failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form className="form-group custom-form">
                <div>
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <button
                    className="btn btn-success"
                    type="button"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
