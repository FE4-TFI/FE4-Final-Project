import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/reducer';
import { useNavigate } from 'react-router-dom';

function Login() {
    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux state
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredential = {
            email, password
        };
        dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/home');
            }
        });
    };


    return (
        <>
            <form action="" className='form-group custom-form' onSubmit={handleLoginEvent}>
                <label htmlFor="">Email</label>
                <input type="email" required className='form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" required className='form-control'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit' className='btn btn-success btn-md' disabled={loading}>
                    {loading ? 'Loading...' : 'LOGIN'}
                </button>
                {error && (
                    <div className='alert alert-danger' role='alert'>{error}</div>
                )}
            </form>
        </>
    );
}

export default Login;
