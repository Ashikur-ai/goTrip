import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks =
        <>
            <li> <NavLink to='/news'>News</NavLink> </li>
            <li> <NavLink to='/destination'>Destination</NavLink> </li>
            <li> <NavLink to='/blog'>Blog</NavLink> </li>
            <li> <NavLink to='/contact'>Contact</NavLink> </li>
    </>
    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
        
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-montserrat text-2xl">goTrip</a>
                <div className="form-control relative">
                    <FaSearch className='absolute top-4 right-4'></FaSearch>
                    <input type="text" placeholder="Search" className="input input-bordered bg-opacity-10 w-24 md:w-auto" />
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-10">
                    {navLinks}
                </ul>
                <a className="btn btn-sm bg-yellow-500 border-none">Login</a>
            </div>
        </div>
    );
};

export default Navbar;