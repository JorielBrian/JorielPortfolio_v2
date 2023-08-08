import { useState, useEffect } from "react";
import { Qualifications, Trainings, Employments } from './components';
import useFetch from "../hooks/useFetch";

const Experience = () =>{
    return(
        <div id="experience" className="w-full place-content-center justify-center">
            <Qualifications />
            <Employments />
            <Trainings />
        </div>
    );
};

export default Experience;