import useFetch from '../hooks/useFetch';
/*import dataAnalyst from '../images/ExpImages/dataanalyst.png';
import ITofficer from '../images/ExpImages/wdImg.jpg';
import computerProgrammer from '../images/ExpImages/webdesign.jpg';
import superMarket from '../images/ExpImages/supermarket.jpg';
import OJTthree from '../images/ExpImages/hardsoftware.jpg';
import dinningCrew from '../images/ExpImages/dinning.jpg';
import teamMember from '../images/ExpImages/icecream.png';
import OJTtwo from '../images/ExpImages/encoding.jpg';
import OJTone from '../images/ExpImages/robotics.jpg';*/

const Qualifications = ( {} ) => {
    const { data: keyqualifications, loading, error } = useFetch('http://localhost:8080/keyqualifications');
    return ( 
        <div id="qualifications" className="w-full">
            <div id="experience-container" className="w-5/6 h-full px-10 py-5 text-white m-auto rounded-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Key Qualifications</h1>
                { error && <div>{ error }</div>}
                { loading && <div><h1>Loading Key Qualifications...</h1></div>}
                { keyqualifications && keyqualifications.map(experience => (
                    <div className="experience w-full p-3 place-content-center md:p-5 xl:grid xl:grid-cols-2" key={ experience.id }>
                        <h2 className="position col-start-1 row-start-1 col-span-2 text-2xl text-left font-bold sm:text-3xl lg:text-4xl">{ experience.position }</h2>
                        <img src={ experience.image } alt={ experience.alt } className="col-start-1 col-end-1 row-start-2 w-full h-60 rounded-md" />
                        <ul className="col-start-2 row-start-2">{ experience.description && experience.description.map(task => (
                            <li key={experience.id} className='w-full text-start text-md sm:text-lg'>
                                {task.duty}
                            </li>))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Qualifications;