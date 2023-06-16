import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
Link

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
                `https://648aeba217f1536d65e9f714.mockapi.io/user?username=${username}&password=${password}`
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
            navigate("/Home"); // Navigate to home page after successful login
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message || "Login failed. Please try again.");
        }
    };

    return (

        <>
        <div className="login-page">
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">SAVI<br /></h1>
                            <h5 className="text-primary">Save Environment</h5>
                            <p className="lh-sm">Save Environment menyediakan artikel edukasi yang membuka wawasan anda mengenai penggunaan plastik secara baik dan benar. Anda juga dapat menggunakan fitur lain seperti lapor untuk mengadukan suatu tindakan merugikan yang berhubungan dengan penggunaan plastik</p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="py-2">
                                    <h2 className="text-center mt-2">Login</h2>
                                    {errorMessage && <p className="alert alert-danger text-center mt-1">{errorMessage}</p>}
                                </div>
                                <div className="card-body py-5 px-md-5">
                                    <form >
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Username</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={username}
                                                        onChange={handleUsernameChange}
                                                        placeholder="Masukkan Nama"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Masukkan Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container d-grid gap-2 pt-2 ">
                                            <button
                                                className="btn btn-primary btn-block mb-4"
                                                type="button"
                                                onClick={handleLogin}
                                                disabled={loading}
                                            >
                                                {loading ? "Logging in..." : "Login"}
                                            </button>
                                        </div>

                                        {/* nav to register */}
                                        <div className="text-center">
                                            <p>Belum punya akun ? <Link
                                                to="/Register"
                                                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Register</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};

export default LoginForm;