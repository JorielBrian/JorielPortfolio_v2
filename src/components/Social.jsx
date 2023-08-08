import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return ( 
        <div className="social-medias flex w-full m-auto text-4xl justify-evenly">
            <a href="https://www.facebook.com/jorielbrian.sudario?mibextid=ZbWKwL" className='hover:scale-125 transform duration-300'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com/jorielbrian?igshid=MzNlNGNkZWQ4Mg==" className='hover:scale-125 transform duration-300'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/@joriel91011?_t=8dVw1EU01J9&_r=1" className='hover:scale-125 transform duration-300'><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="https://www.linkedin.com/in/joriel-brian-sudario-b14728265" className='hover:scale-125 transform duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/JorielBrian" className='hover:scale-125 transform duration-300'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    );
}

export default Social;