import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // redux state
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredential = {
            username, password
        };
        dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
                setUsername('');
                setPassword('');
                navigate('/home');
            }
        });
    };


    return (
        <>
            <form action="" className='form-group custom-form' onSubmit={handleLoginEvent}>
                <label htmlFor="">Email</label>
                <input type="text" required className='form-control'
                    value={username} onChange={(e) => setUsername(e.target.value)} />
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