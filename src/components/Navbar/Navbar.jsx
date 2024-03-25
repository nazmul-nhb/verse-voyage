import { NavLink } from "react-router-dom";

const Navbar = () => {


    return (
        <header className="mx-0 md:mx-16 lg:mx-32 mt-3 md:mt-12">
            <div className="max-w-7xl font-lexend items-center navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/listed-books'}>Listed Books</NavLink></li>
                            <li><NavLink to={'/pages-to-read'}>Pages to Read</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl md:text-4xl font-bold">Verse Voyage</a>
                </div>
                <div className="navbar-center hidden xl:flex text-[#150B2BB3]">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/listed-books'}>Listed Books</NavLink></li>
                        <li><NavLink to={'/pages-to-read'}>Pages to Read</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex justify-end gap-4">
                    <button className="btn">Sign In</button>
                    <button className="btn">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;