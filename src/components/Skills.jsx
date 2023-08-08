import useFetch from "../hooks/useFetch";

const Skills = () => {
    const { data: skills, loading, error } = useFetch('http://localhost:8080/skills')
    return ( 
        <div id="skills" className="flex w-full my-10 text-white">
            <div id="skills-container" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 m-auto">
                { error && <div><h1 className="text-2xl">{error}</h1></div> }
                { loading && <div><h1 className="text-2xl">Loading...</h1></div> }
                { skills && skills.map(skill => (
                    <span className="skill-container w-32 h-32 rounded-md border border-white" key={skill.id}>
                        <img src={skill.img} alt={skill.alt} />
                        <h6 className="text-md">{skill.name}</h6>
                    </span>
                ))}
            </div>
        </div>
    )   
    ;}

export default Skills