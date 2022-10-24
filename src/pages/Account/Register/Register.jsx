import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import background from "../../../background.jpg";
import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
   const { createNewUser, loginWithGoogle } = useContext(AuthContext);

   /* handle register form submit */
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const rePassword = form.re_password.value;
      console.log(name, email, password, rePassword);

      /* Create a user */
      createNewUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
         })
         .catch((e) => console.log(e));
   };

   /* Google Sign In */
   const handleGoogleLogin = () => {
      loginWithGoogle()
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((e) => console.log(e));
   };

   return (
      <div
         className="hero min-h-screen bg-base-200 pt-20"
         style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(70, 70, 70, 0.63) 100%), url(${background})`,
         }}
      >
         <div className="hero-content flex-col w-11/12 md:w-3/5 lg:max-w-lg">
            <div className="card w-full shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="text-center">
                     <h1 className="text-3xl font-bold">SIGN UP</h1>
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Full Name</span>
                     </label>
                     <input
                        type="text"
                        name="name"
                        placeholder="full name"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Re-type Password</span>
                     </label>
                     <input
                        type="password"
                        name="re_password"
                        placeholder="re-type password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control mt-5">
                     <button className="btn btn-outline hover:btn-primary">Sign Up</button>
                  </div>

                  <p className="text-center my-2">
                     Already have an account?{" "}
                     <Link to="/login" className="link link-hover text-end text-base text-primary">
                        Login
                     </Link>
                  </p>

                  <div className="divider">OR</div>
                  <div className="text-center">
                     <h4>Sign Up With</h4>
                  </div>
                  <div className="form-control mt-2 flex flex-row gap-3 w-full justify-evenly">
                     <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline hover:btn-primary w-1/4"
                     >
                        <FaGoogle className="w-5 h-5" />
                     </button>
                     <button className="btn btn-outline hover:btn-primary w-1/4">
                        <FaGithub className="w-5 h-5" />
                     </button>
                     <button className="btn btn-outline hover:btn-primary w-1/4">
                        <FaTwitter className="w-5 h-5" />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
