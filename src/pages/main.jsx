import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// icons :

// import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
import Social from "../components/social"
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";


export default function Main() {

    const [dark, setDark] = useState(false);
    const [isFr, setIsFr] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("https://my-personal-portfolio-project-api.onrender.com/projects")
            .then((response) => response.json())
            .then((result) => {
                setData(result)
            })
            .catch((error) => { console.error("Error fetching data:", error) });
    }

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <div className={`w-full flex justify-center h-full ${dark === false ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
            <div className="md:w-[47%] w-full md:p-0 px-5 mt-10">

                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold">Benanberg Ayoub</span>
                        <span className={`font-semibold ${dark === false ? "text-gray-300/70" : "text-gray-600"}`}>{isFr === false ? "Web Developer" : "Développeur Web"}</span>
                    </div>
                    <div className="flex justify-center">
                        <button className="border border-gray-500 rounded-md p-1.5 px-3 m-2 font-semibold" onClick={() => setIsFr(!isFr)}>{isFr === false ? "Fr" : "En"}</button>
                        <button><img src={`${dark === false ? "imgs/icons/sun.png" : "imgs/icons/night.png"}`} className="border border-gray-500 rounded-md p-1.5 m-2 w-9" alt="mode" onClick={() => { setDark(!dark) }} /></button>
                    </div>
                </div>
                {/* Socials */}
                <Social />
                {/* about me */}

                <About isFr={isFr} dark={dark} />

                {/* tecnologies i use */}


                {/* feature projects */}
                <div className="my-7">

                    <h3 className="text-lg font-bold">{isFr === false ? "Feature Projects" : "Projets vedettes"}</h3>
                    <Projects data={data.slice(0, 3)} isFr={isFr} dark={dark} />
                </div>

                {/* Link to All Projects page */}
                <div className="w-full flex justify-end">
                    <Link to="/all-projects" className="text-lg font-semibold hover:underline ">
                        {isFr === false ? "All Projects" : "Tous les projets"}
                    </Link>
                </div>



                {/* Get in touch */}
                <Footer isFr={isFr} dark={dark} />
            </div>

        </div>
    )
}