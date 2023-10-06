import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleSocialSignIn = (media) => {
        media()
            .then(result => {
                console.log(result.user);
                toast.success('Logged in successful');
                navigate(location?.state ? 
                    location.state : '/'
                    )
            })
            .catch(error => {
            console.log(error);
        })
    }

    

    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-black'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='w-1/2 mx-auto  mt-28'>
                <form className="card-body border rounded-lg border-black">
                    <p className='p-3 font-bold text-2xl'>Login</p>

                    <div className="form-control">
                        
                        <input type="text" name='origin' placeholder="Username or Email" className="input " required />
                        <div className="divider "></div>
                    </div>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="Password" className="input " required />
                        <div className="divider "></div>

                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </div>
                        <div>
                            <p className='text-yellow-500 link'>Forget Password</p>
                        </div>
                    </div>
                    
                    
                    

                    

                    <div className="form-control mt-20">
                        <button className="btn rounded-none  bg-yellow-500 border-none text-black">Login</button>
                        <p className='text-center font-bold mt-3'>Don't have an account?
                            <Link to="/register">
                                <span className='text-yellow-500 link'> Create an account</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div>
                    <div className="divider my-9">OR</div>
                </div>

                <div>
                    <button onClick={()=>handleSocialSignIn(githubSignIn)} className=" btn btn-outline  w-full rounded-full"> <FaGithub className='text-3xl text-green-700'></FaGithub> Continue with Github</button>
                </div>
                
                <div className=''>
                    <button onClick={()=>handleSocialSignIn(googleSignIn)} className=" btn btn-outline mt-4 w-full rounded-full"> <FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
                </div>
                <div className='pb-40'></div>
            </div>

        </div>
    );
};

export default Login;