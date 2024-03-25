import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const navRoutes = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listed-books'}>Listed Books</NavLink></li>
        <li><NavLink to={'/pages-to-read'}>Pages to Read</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

    return (
        <header className="work-sans mt-3 md:mt-12 mx-4 md:mx-6 xl:mx-0">
            <div className="max-w-7xl font-lexend items-center navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navRoutes}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-[#131313] text-lg md:text-3xl font-bold transition-all hover:shadow-sm px-0">Verse Voyage</Link>
                </div>
                <div className="navbar-center hidden xl:flex text-[#150B2BB3]">
                    <ul className="text-[#131313CC] text-lg font-semibold menu menu-horizontal gap-4 px-1">
                        {navRoutes}
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center gap-2 md:gap-4 text-sm md:text-lg text-white font-semibold">
                    <button className="bg-[#23BE0A] border border-[#23BE0A] rounded-xl w-16 md:w-28 h-7 md:h-12 hover:bg-white hover:text-[#23BE0A] transition-all">Sign In</button>
                    <button className="bg-[#59C6D2] border border-[#59C6D2] rounded-xl w-16 md:w-28 h-7 md:h-12 hover:bg-white hover:text-[#59C6D2] transition-all">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;