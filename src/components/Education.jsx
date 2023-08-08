import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const Education = () => {
    const { data: educations, loading, error} = useFetch('http://localhost:8080/education')
    return ( 
        <div id="education" className="w-full">
            <div id="education-container" className="w-5/6 h-full flex flex-wrap px-10 py-5 text-white m-auto rounded-2xl">
                { error && <div><h1 className="text-2xl">{error}</h1></div> }
                { loading && <div><h1 className="text-2xl">Loading...</h1></div> }
                { educations && educations.map(education => (
                        <Card education={education} key={education.id} />
                    ))}
            </div>
        </div>
    );
};

export default Education;