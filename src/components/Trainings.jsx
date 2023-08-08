import useFetch from "../hooks/useFetch";

const Trainings = () => {
    const { data: trainings, loading, error } = useFetch('http://localhost:8080/trainings')
    return ( 
        <div id="training" className="w-full">
            <div id="trainings-container" className="w-5/6 h-full px-10 py-5 text-white m-auto rounded-2xl">
                <h1 className="text-4xl font-bold">Trainings</h1>
                { error && <div><h1 className="text-2xl">{error}</h1></div> }
                { loading && <div><h1 className="text-2xl">Loading...</h1></div> }
                { trainings && trainings.map(training => (
                    <div className="trainings p-5 font-bold text-left" key={training.id}>
                        <h1 className="text-lg">{training.position}</h1>
                        <h2 className="text-sm">{training.employer}</h2>
                        <h2 className="text-lg">{training.period}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trainings;