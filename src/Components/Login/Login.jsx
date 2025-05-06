import React, { use } from 'react';
import { Link } from 'react-router';
// import { auth } from '../../Firebase_Intit/firebase_init';
import { AuthContext } from '../../Contexts/AuthContexts';
import { Result } from 'postcss';

const Login = () => {

        const {singInUser} = use(AuthContext);
        console.log(singInUser);


    const handleLogin = e =>  {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        // login user
        singInUser(email, password)
        .then(result => {
            console.log(result)
        .catch(error => {
            console.log(error)
        })
        })

    }
    return (
        <div className="bg-base-100 min-h-screen ">
  
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto border mt-20">
    <h1 className='text-2xl font-bold text-center mt-10 text-amber-500'>Login Now</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input w-full mb-2" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Have No an account ? Please <Link className='text-blue-600 underline' to="/register">Register</Link></p>
      </div>
  </div>
</div>
    );
};

export default Login;