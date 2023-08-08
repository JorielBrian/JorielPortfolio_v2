import useFetch from '../hooks/useFetch';

const Qualifications = ( {} ) => {
    const { data: keyqualifications, loading, error } = useFetch('http://localhost:8080/keyqualifications');
    return ( 
        <div id="qualifications" className="w-full">
            <div id="experience-container" className="w-5/6 h-full px-10 py-5 text-white m-auto rounded-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Key Qualifications</h1>
                { error && <div>{ error }</div>}
                { loading && <div><h1>Loading Key Qualifications...</h1></div>}
                { keyqualifications && keyqualifications.map(experience => (
                    <div className="experience w-full p-3 place-content-center md:p-5 xl:grid xl:grid-cols-2 xl:gap-2" key={ experience.id }>
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