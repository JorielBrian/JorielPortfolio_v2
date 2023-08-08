import useFetch from "../hooks/useFetch";
const Employments = () => {
    const { data: employments, loading, error } = useFetch('http://localhost:8080/employments')
    return (
        <div id="employments" className="w-full">
            <div id="employments-container" className="w-5/6 h-full px-10 py-5 text-white m-auto rounded-2xl">
                <h1 className="w-full py-10 text-4xl md:text-5xl text-center font-bold">Emloyment Records</h1>
                { error && <div><h1 className="text-2xl">{error}</h1></div> }
                { loading && <div><h1 className="text-2xl">Loading...</h1></div> }
                { employments && employments.map(employee => (
                    <div id="employee-container" key={employee.id} className="p-3 text-left">
                        <div className="w-full bg-white border border-white mb-5"></div>
                        <h1 className="text-xl md:text-3xl font-bold">{employee.position}</h1>
                        <h2 className="text-md md:text-lg">{employee.employer}</h2>
                        <h2 className="text-md md:text-lg">{employee.period}</h2>
                        <div className="w-full bg-white mt-5 border border-white"></div>
                    </div>
                )) }
            </div>
        </div>
        
    );
}

export default Employments;