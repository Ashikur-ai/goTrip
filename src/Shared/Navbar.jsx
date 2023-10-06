import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error('logged out successful');
            })
            .catch(error => {
            console.log(error);
        })
    }

    

    const navLinks =
        <>
            <li > <button>News</button> </li>
            <li> <NavLink to='/destination'>Destination</NavLink> </li>
            <li> <NavLink to='/blog'>Blog</NavLink> </li>
            <li> <NavLink to='/contact'>Contact</NavLink> </li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
        
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case  font-montserrat text-2xl">goTrip</Link>
                <div className="form-control relative">
                    <FaSearch className='absolute top-4 right-4'></FaSearch>
                    <input type="text" placeholder="Search" className="input input-bordered bg-opacity-10 w-24 md:w-auto" />
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                
            </div>
            <div className="navbar-end">
                <ul className="menu hidden lg:flex menu-horizontal px-10">
                    {navLinks}
                </ul>
                {
                    user ? 
                        <>
                            <p>{user.displayName ? user.displayName: user.email}</p>
                            <a onClick={handleLogOut} className="btn btn-sm bg-yellow-500 border-none ml-4">Logout</a>
                        </>
                        
                            :
                        <Link to="/login" className="btn btn-sm bg-yellow-500 border-none">Login</Link>
                        

                }
                
            </div>
        </div>
    );
};

export default Navbar;