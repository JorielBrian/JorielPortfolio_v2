import { useRef, useState } from "react";

const Card = ({education}) => {
    const [ flipped, setFlipped ] = useState(false);
    const card = useRef();
    const toggleFlip = () => {
        if(!flipped){
            card.current.classList.add('isFlipped');
            setFlipped(true);
        } else {
            card.current.classList.remove('isFlipped');
            setFlipped(false);
        }
    };

    return ( 
        <div ref={card} onClick={toggleFlip} className={`card-container w-72 h-80 mx-auto my-3 text-center relative bg-slate-600 border bg-[url("${education.image}") no-repeat center] bg-cover border-white rounded-lg`}>
            <div className="front text-center">
                <h1 className="text-xl font-bold">{ education.school }</h1>
                <img src={ education.image } alt={ education.alt } className="w-full h-32 m-auto" />
                <h2 className="text-md font-bold">{ education.course }</h2>
                <h2 className="text-sm">{ education.period }</h2>
            </div>
            <div className="back">
                <h2>{ education.address }</h2>
                <p>{ education.info }</p>
            </div>
        </div>
    );
}

export default Card;