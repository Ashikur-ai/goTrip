import React, { useContext, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { googleSignIn, user, githubSignIn, EmailSignIn } = useContext(AuthContext);

    const [isShow, setIsShow] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        EmailSignIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                toast.success('SignIn successful');
            })
            .catch(error => {
            console.log(error);
        })

       
        

    }

    const handleSocialSignIn = (media) => {
        media()
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='mb-40'>
            <Helmet>
                <title>goTrip - Register</title>
            </Helmet>
            <div className='container mx-auto'>
                <div className='text-black'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='w-1/2 mx-auto  mt-28'>

                <form onSubmit={handleRegister} className="card-body border rounded-lg border-black">
                    <p className='p-3 font-bold text-2xl'>Create an account</p>

                    

                    <div className="form-control">

                        <input type="email" name='email' placeholder="Username or Email" className="input " required />
                        <div className="divider "></div>
                    </div>

                    <div className="relative form-control">

                        <input type={isShow?"text":"password"} name='password' placeholder="Password" className="input " required />
                        {
                            isShow ?
                                <span onClick={() => setIsShow(!isShow)}><FaEyeSlash className='absolute right-3'></FaEyeSlash></span>
                                :
                                <span onClick={() => setIsShow(!isShow)}><FaEye className='absolute right-3'></FaEye></span>


                        }
                        <div className="divider "></div>

                    </div>

                    

                    <div className="form-control ">
                        <button className="btn rounded-none  bg-yellow-500 border-none text-black">Create an account</button>
                        <p className='text-center font-bold mt-3'>Already have an account? 
                            <Link to="/login">
                                <span className='text-yellow-500 link'> Login</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div>
                    <div className="divider my-9">OR</div>
                </div>

                <div>
                    <button onClick={()=>{handleSocialSignIn(githubSignIn)}} className=" btn btn-outline  w-full rounded-full"> <FaGithub className='text-3xl text-green-700'></FaGithub> Continue with Github</button>
                </div>

                <div>
                    <button onClick={()=>handleSocialSignIn(googleSignIn)} className=" btn btn-outline mt-4 w-full rounded-full"> <FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Register;