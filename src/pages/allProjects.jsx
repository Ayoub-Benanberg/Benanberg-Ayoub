import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Projects from "../components/projects";

export default function AllProjects() {
    const [dark, setDark] = useState(false);
    const [isFr, setIsFr] = useState(false);
    const [data, setData] = useState([]);

    // Fetching project data
    const fetchData = () => {
        fetch("https://my-personal-portfolio-project-api.onrender.com/projects")
            .then((response) => response.json())
            .then((result) => {
                setData(result);  // Set fetched data to state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);  // Log error if fetch fails
            });
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={`w-full flex justify-center h-full ${dark === false ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
            <div className="md:w-[47%] w-full md:p-0 px-5 mt-10">
                <Link to={"/"} className="my-16">
                    <p className="font-semibold"> <span className={`${dark === false ? "text-gray-400/80 hover:text-white" : "text-gray-800/20 hover:text-black"}  `}>Home</span>  <span className="px-2">\</span> <span>Projects</span></p>
                </Link>


                <div className="flex justify-between mt-5">

                    <div>
                        <h2 className="text-3xl font-bold">{isFr ? "Tous les projets" : "All Projects"}</h2>
                    </div>
                    {/* buttons */}
                    <div className="flex">
                        {/* Language toggle */}
                        <button className="border border-gray-500 rounded-md p-1.5 px-3 m-2 font-semibold" onClick={() => setIsFr(!isFr)}>
                            {isFr ? "En" : "Fr"}
                        </button>

                        {/* Dark mode toggle */}
                        <button>
                            <img
                                src={`${dark === false ? "imgs/icons/sun.png" : "imgs/icons/night.png"}`}
                                className="border border-gray-500 rounded-md p-1.5 m-2 w-9"
                                alt="mode"
                                onClick={() => setDark(!dark)}
                            />
                        </button>
                    </div>

                </div>

                {/* Display All Projects */}
                <Projects data={data} isFr={isFr} dark={dark} />

                {/* Footer */}
                <Footer isFr={isFr} dark={dark} />
            </div>
        </div>
    );
}
