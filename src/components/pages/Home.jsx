import { Welcome, Qualifications, Education, Skills } from '../components'
import { Outlet, Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div id="home-component">
            <Welcome />
            <Qualifications />
            <Link to='experience' className='mt-0 m-auto text-xl text-white font-bold border-b-2 hover:text-yellow-400 transform hover:scale-125 transition duration-500'>More About my Experiences</Link>
            <Outlet />
            <Skills />
            <Education />
        </div>
    );
}

export default Home;