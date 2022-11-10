import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const hanleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')

                const currentuser = {
                    email: user.email
                }

                fetch('https://optic-thirst-server.vercel.app/jwt', {
                    method: 'POst',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem("token", data.token)
                        navigate(from, { replace: true })
                    })

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <form onSubmit={hanleLogin}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-3xl ">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-3xl">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    {error}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-sm text-center pt-3'>New to Optic Thirst <Link className='text-amber-500' to='/signup'>Sign up</Link></p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                        <p className="py-6">We will never ask you to call or text a phone number or share personal information. <br /> Please report suspicious activity using the “Report Abuse” option..</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;