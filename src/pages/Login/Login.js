import React from 'react';

const Login = () => {

    const hanleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
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
                                {/* <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
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