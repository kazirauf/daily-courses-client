import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
const SignUp = () => {
    const handleRegister = event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
    }
    return (
        <div className='bg-green-500'>
        <div className="hero min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">name</span>
      </label>
      <input type="text" placeholder="name" name='name' className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" placeholder="email" name='email' className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="text" placeholder="password" name='password' className="input input-bordered" />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Sign Up</button>
    </div>
    <button className="btn btn-primary"><FaGoogle></FaGoogle></button>
    <button className="btn btn-primary"><FaGithub></FaGithub></button>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default SignUp;