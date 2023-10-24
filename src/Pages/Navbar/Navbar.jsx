import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { FiLogIn, FiLogOut } from 'react-icons/fi'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignOut = () =>{
        logOut()
        .then(()=>{
            Swal.fire('User logged out successful');

            // navigate after loading
            navigate(location?.state ? location.state : '/');
        })
        .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className="font-bold text-xl ">Home</NavLink></li>
        <li><NavLink to="/login" className="font-bold text-xl ">Login</NavLink></li>
        <li><NavLink to="/addProducts" className="font-bold text-xl">Add Product</NavLink></li>
        <li><NavLink to="/myCarts" className="font-bold text-xl">My Cart</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-purple-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-24 h-14" src="https://i.ibb.co/ysW4Wj6/channels4-profile-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <p className="font-bold mr-3">{user.displayName}</p>
                    }
                    {
                        user && <label tabIndex={0} className="avater">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} className="rounded-full" />
                            </div>
                        </label>
                    }
                    {
                        user ? <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"><FiLogOut></FiLogOut></button>
                        :
                        <Link to="/login">
                        <button className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"><FiLogIn></FiLogIn></button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;