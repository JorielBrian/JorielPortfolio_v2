import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Social } from './components'

const Contacts = () => {
    return ( 
        <div id="contact" className="w-full h-auto p-10 flex flex-wrap rounded-lg bg-black text-white">
            <div id="contact-container" className="w-full mb-3 md:w-1/2">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p>jorielsudario@gmail.com</p>
                <p>+63-951-277-3058</p>
            </div>
            <div id="social-media-container" className="w-full mt-3 md:w-1/2">
                <h1 className="text-4xl font-bold">Social Media</h1>
                <Social />
            </div>
        </div>
    );
}

export default Contacts;