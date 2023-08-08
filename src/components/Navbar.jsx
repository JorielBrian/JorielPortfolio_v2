import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { Outlet, Link } from 'react-router-dom';

const Navbar = () =>{
    const [ navBtn, setNavBtn ] = useState(true);
    const navigation = useRef();

    const toggleNavbar = () => {
        if(navBtn === true){
            navigation.current.classList.remove('hidden');
            navigation.current.classList.add('flex');
            setNavBtn(false);
        } else {
            navigation.current.classList.remove('flex');
            navigation.current.classList.add('hidden');
            setNavBtn(true);
        }
    }

    return(
        <div className="navbar w-full h-20 flex flex-wrap sticky top-2 items-center justify-between bg-gradient-to-r from-blue-800 to-slate-950 bg-opacity-90 rounded-md">
            <div id="title-container" className="group w-1/2 flex flex-wrap pl-5 pb-1 pt-1 text-6xl font-bold transition ease-out duration-1000">
                <h1 id="joriel" className="w-7 h-20 overflow-hidden text-blue-950 group-hover:w-auto">Joriel</h1>
                <h1 id="brian" className="w-[42px] h-20 overflow-hidden text-gray-600 group-hover:w-auto">Brian</h1>
                <h1 id="portfolio" className="w-0 h-20 drop-shadow-2xl overflow-hidden text-white group-hover:w-auto">Portfolio</h1>
            </div>
            <button onClick={toggleNavbar} className="w-20 md:hidden"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} className="w-1/4 right-10 text-2xl shadow-2xl" /></button>
            <ul id="navbar" ref={navigation} className='hidden w-full md:w-1/2 flex-col md:flex md:flex-row items-center justify-evenly top-24 backdrop-blur text-lg text-white font-semibold md:static lg:w-1/2'>
                <li className="transform hover:scale-125 transition duration-500"><Link to='/'>Home</Link></li>
                <li className="transform hover:scale-125 transition duration-500"><Link to='/experience'>Experiences</Link></li>  
                <li className="transform hover:scale-125 transition duration-500"><a href="#contact">Contact</a></li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Navbar;