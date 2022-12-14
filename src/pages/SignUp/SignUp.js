import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createSignUp } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        form.reset();
        createSignUp(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                console.log(user);
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <form onSubmit={handleSignUp}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-3xl ">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" required />
                            </div>
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
                            <p className='text-sm text-center pt-3'>You have a account <Link className='text-amber-500	' to='/Login'>Login</Link></p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">We will never ask you to call or text a phone number or share personal information. <br /> Please report suspicious activity using the ???Report Abuse??? option..</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
