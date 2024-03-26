import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52  font-semibold">
                        <NavLink to='/' className={({isActive}) => isActive ? 'text-lime-500' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/listed' className={({isActive}) => isActive ? 'text-lime-500' : 'font-bold'}>Listed Books</NavLink>
                        <NavLink to='/pages' className={({isActive}) => isActive ? 'text-lime-500' : 'font-bold'}>Pages to Read</NavLink>
                        <NavLink to='/want' className={({isActive}) => isActive ? 'text-lime-500' : 'font-bold'}>Want To Buy</NavLink>
                        <NavLink to='/special' className={({isActive}) => isActive ? 'text-lime-500' : 'font-bold'}>Special Books</NavLink>

                        </ul>
                    </div>
                    <p className="font-bold text-normal lg:text-3xl">Book Vibe</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold  gap-4 rounded-box ">
                        <NavLink to='/' className={({isActive}) => isActive ? 'text-lime-500 border-2 rounded border-lime-500 p-1' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/listed' className={({isActive}) => isActive ? 'text-lime-500 border-2 rounded border-lime-500 p-1' : 'font-bold'}>Listed Books</NavLink>
                        <NavLink to='/pages' className={({isActive}) => isActive ? 'text-lime-500 border-2 rounded border-lime-500 p-1' : 'font-bold'}>Pages to Read</NavLink>
                        <NavLink to='/want' className={({isActive}) => isActive ? 'text-lime-500 border-2 rounded border-lime-500 p-1' : 'font-bold'}>Want To Buy</NavLink>
                        <NavLink to='/special' className={({isActive}) => isActive ? 'text-lime-500 border-2 rounded border-lime-500 p-1' : 'font-bold'}>Special Books</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-2 ">
                    <a className="btn  bg-lime-500 text-white">Sign In</a>
                    <a className="btn bg-sky-400 text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;