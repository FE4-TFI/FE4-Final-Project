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

        <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
            <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-3 fw-bold ls-tight">SAVI<br />
                            <h5 className="text-primary">Save Environment</h5>
                        </h1>
                        <p className="lh-sm">Save Environment menyediakan artikel edukasi yang membuka wawasan anda mengenai penggunaan plastik secara baik dan benar. Anda juga dapat menggunakan fitur lain seperti lapor untuk mengadukan suatu tindakan merugikan yang berhubungan dengan penggunaan plastik</p>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="py-2">
                                <h2 className="text-center mt-2">DAFTAR</h2>
                                {successMessage && <p className="alert alert-success text-center mt-1">{successMessage}</p>}
                                {errorMessage && <p className="alert alert-danger text-center mt-1">{errorMessage}</p>}
                            </div>
                            <div className="card-bofy py-5 px-md-5">
                                <form>
                                    <div className="row">
                                        <div >
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Username</label>
                                                <input className="form-control"
                                                    type="text"
                                                    placeholder="Masukkan Nama User"
                                                    value={username}
                                                    onChange={handleUsernameChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label htmlFor="" className="form-label">Email</label>
                                                <input className="form-control"
                                                    placeholder="Masukkan Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={handleEmailChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label">Password</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Masukkan Password"
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container d-grid gap-2 pt-2">
                                        <button className="btn btn-primary btn-block mb-4"
                                            type="button"
                                            onClick={handleRegister} disabled={loading}>
                                            {loading ? "Mendaftarkan Akun..." : "Daftar"}
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p>
                                            Sudah punya akun? <Link to="/LoginForm" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Login</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default RegisterForm;
