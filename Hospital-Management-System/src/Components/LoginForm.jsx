import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { BiEnvelope, BiLock } from 'react-icons/bi';
import Dashboard from './Dashboard';



function LoginForm() {

    const [theme, setTheme] = useState("dark");
    const navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleLogin() {

        if (email == "admin@123" && password == "1234") {
            navigator("/Dashboard");
        }
        else {
            navigator("/");
        }
    }

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <div className={`d-flex vh-100 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                {/* Left Side */}
                <div className='col-md-8 p-5 d-flex flex-column justify-content-center'>
                    <h2 className='mb-4 text-center'>Late Dr. M. V. Govilkar Rugna Seva Sadan</h2>
                    <div className='image m-auto '>
                        <img src='/img/loginLogo.png' className='img-fluid' width='500' alt='Logo' />
                    </div>
                </div>
                {/* Right Side */}
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <div className='d-flex justify-content-between' >
                        <div className='image mb-5 '>
                            <img src='/img/GrssLogo.png' className='img-fluid' width='60' />
                        </div>
                        <div className='theme me-3 mt-3'>
                            <button className='btn btn-outline-secondary m' onClick={handleTheme}>
                                {theme === "dark" ? <BsSun size={24} /> : <BsMoon size={24} />}
                            </button>
                        </div>
                    </div>
                    <div className='text-center'>
                        <i className='bi bi-hospital fs-1 text-primary'></i>
                    </div>
                    <h3 className='mt-3 '>Welcome</h3>
                    <p className='text-left'>Enter your account credentials to sign in</p>
                    <form onSubmit={handleLogin} className='border-bottom bottom-4 mb-4' >
                        <div className='mb-3'>
                            <label className='form-label'>Email Address</label>
                            <div className='input-group'>
                                <span className='input-group-text'>{<BiEnvelope />}</span>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Ex: abc@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <div className='input-group'>
                                <span className='input-group-text'>{<BiLock />}</span>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='***********'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='d-grid'>
                            <button type='submit' className='btn btn-primary'>Sign in</button>
                        </div>
                    </form>
                    <footer className='text-center '>Developed By Akash Kadam</footer>
                </div>
            </div>
        </>
    );
}

export default LoginForm