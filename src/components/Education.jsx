import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

const Education = () => {
    const { data: educations, loading, error} = useFetch('http://localhost:8080/education')
    const [ flip, setFlip ] = useState(false);
    const card = useRef();
    const toggleFlip = element => console.log(element);    
    return ( 
        <div id="education" className="w-full">
            <div id="education-container" className="w-5/6 h-full flex flex-wrap px-10 py-5 text-white m-auto rounded-2xl">
                { error && <div><h1 className="text-2xl">{error}</h1></div> }
                { loading && <div><h1 className="text-2xl">Loading...</h1></div> }
                { educations && educations.map(education => (
                    <div ref={card} onClick={toggleFlip} className="education w-72 h-80 mx-auto my-3 place-content-center md:p-5 relative bg-slate-600 border border-white rounded-lg" key={ education.id }>
                        <div className="front text-center">
                            <h1 className="text-xl font-bold">{ education.school }</h1>
                            <img src={ education.image } alt={ education.alt } />
                            <h2 className="text-md font-bold">{ education.course }</h2>
                            <h2 className="text-sm">{ education.period }</h2>
                        </div>
                        <div className="back">
                            <h2>{ education.address }</h2>
                            <p>{ education.info }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Education;