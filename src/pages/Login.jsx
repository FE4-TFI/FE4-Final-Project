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
        <div className="container bg-light border-light-subtle rounded mt-5">
            <div className="py-2">
                <h2 className="text-center mt-2">Login</h2>
                {errorMessage && <p className="text-center mt-1">{errorMessage}</p>}
            </div>
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

                <div className="container d-grid gap-2 pt-2 ">
                    <button
                        className="btn btn-success btn-primary mb-5"
                        type="button"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;
