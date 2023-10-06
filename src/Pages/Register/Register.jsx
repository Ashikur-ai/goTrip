import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { googleSignIn, user, githubSignIn } = useContext(AuthContext);

    console.log(user);
    const handleSocialSignIn = (media) => {
        media()
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful');
            })
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='mb-40'>
            <div className='container mx-auto'>
                <div className='text-black'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='w-1/2 mx-auto  mt-28'>
                <form className="card-body border rounded-lg border-black">
                    <p className='p-3 font-bold text-2xl'>Create an account</p>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="First Name" className="input " required />
                        <div className="divider "></div>
                    </div>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="Last Name" className="input " required />
                        <div className="divider "></div>
                    </div>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="Username or Email" className="input " required />
                        <div className="divider "></div>
                    </div>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="Password" className="input " required />
                        <div className="divider "></div>

                    </div>

                    <div className="form-control">

                        <input type="text" name='origin' placeholder="Confirm Password" className="input " required />
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