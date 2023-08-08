const Welcome = () => {
    return(
        <div id="home" className="w-full">
            <div className="w-full sm:h-[65vh] md:h-[75vh] lg:h-screen py-10 flex flex-wrap justify-center items-center">
                <div id="left-welcome" className="w-full p-4 sm:pl-10 md:pl-16 xl:pl-24 mb-10 font-bold text-white text-start sm:w-full md:w-2/3">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl">Hi, I am</h1>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl">Joriel Brian S. Sudario</h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl">Front-End Developer</h1>
                    <h1 className="text-md sm:text-lg lg:text-3xl">HTML, CSS, JavaScript, Tailwind, React</h1>
                </div>
                <div id="right-welcome" className="w-1/3 text-white">
                    <h1 className="place-content-center">picture here</h1>
                </div>
            </div>
        </div>
    );
};

export default Welcome;