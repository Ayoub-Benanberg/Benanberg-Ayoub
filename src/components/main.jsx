import { useState, useEffect } from "react";

// icons :

import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Social from "./social";


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
                <div className="mt-7">
                    <h3 className="text-lg font-bold">{isFr === false ? "About" : "À propos"}</h3>
                    <p className={`mt-2 text-base font-semibold ${dark === false ? "text-gray-300/70" : "text-gray-600"}`}>
                        {isFr === false ? "Hi, I'm Ayoub from Morocco. I’m a front-end developer. I enjoy solving challenges and problems I encounter, and I’m always working to improve my skills and take on new projects." : "Bonjour, je m'appelle Ayoub et je suis marocain. Je suis développeur front-end. J'aime résoudre les défis et les problèmes que je rencontre, et je travaille toujours pour améliorer mes compétences et entreprendre de nouveaux projets."}
                    </p>
                </div>

                {/* tecnologies i use */}


                {/* feature projects */}
                <div className="my-7">
                    <h3 className="text-lg font-bold">{isFr === false ? "Feature Projects" : "Projets vedettes"}</h3>

                    {/* fetched data */}
                    {data.map((project) => (
                        <div key={project.id} className={`p-4 mt-6 bg-gray-600/5 rounded-lg shadow-lg`}>
                            <div className="flex justify-between">
                                <div className='flex'>
                                    {/* <div className='w-[20%] p-2'>
                                        <img src={project.image.src} alt={project.image.alt} className='w-full' />
                                    </div> */}

                                    <div className='flex flex-col p-1'>
                                        {/* project title */}
                                        <h3 className="font-bold">{project.title}</h3>
                                        {/* project description */}
                                        <p className={`text-sm ${dark === false ? "text-gray-300/70" : "text-gray-600"}`}>{isFr === false ? project.description.en : project.description.fr}</p>
                                    </div>
                                </div>

                                {/* visit repo and website */}
                                <div className="flex gap-2">
                                    {/* GitHub Repo Link*/}
                                    <div className="relative group inline-block">
                                        <a
                                            rel="noreferrer"
                                            href={project.repoLink}
                                            target="_blank"
                                            aria-label="GitHub"
                                            className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"
                                        >
                                            <FaGithub className="w-3.5 h-3.5" />

                                        </a>
                                        {/* Tooltip */}
                                        <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                                            Source Code
                                        </span>
                                    </div>

                                    {/* visit website */}
                                    <div className="relative group inline-block">
                                        <a
                                            rel="noreferrer"
                                            href={project.url}
                                            target="_blank"
                                            aria-label="url"
                                            className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"
                                        >
                                            <FaExternalLinkAlt className="w-3.5 h-3.5" />

                                        </a>
                                        {/* Tooltip */}
                                        <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                                            Visit Website
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* technologies */}
                            <div className="flex py-3 gap-x-4">
                                {project.technologies.map((tec, index) => (
                                    <div key={index} className="flex items-center p-0.5 font-semibold px-1 text-sm border border-[#2e2e2e] rounded-full">
                                        {/* <img src={tec.image.src} alt={tec.image.alt} className="w-3.5 h-3.5"/> */}


                                        {tec.name === "React" && <FaReact className="w-4 h-4" />}
                                        {tec.name === "Tailwind CSS" && <RiTailwindCssFill className="w-4 h-4" />}
                                        {tec.name === "HTML" && <FaHtml5 className="w-4 h-4" />}
                                        {tec.name === "CSS" && <FaCss3 className="w-4 h-4" />}
                                        {tec.name === "Bootstrap" && <FaBootstrap className="w-4 h-4" />}
                                        <span className="px-1">{tec.name}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    ))}


                </div>

                {/* Get in touch */}
                <div className="my-14">
                    <h3 className="text-lg font-bold">{isFr === false ? "Get in touch" : "Contactez-nous"}</h3>
                    <p className={`mt-2 text-base font-semibold ${dark === false ? "text-gray-300/70" : "text-gray-600"}`}>
                        {isFr === false ? "Feel free to reach out if you’d like to collaborate on a project, have any questions, or just want to contact." : "N'hésitez pas à nous contacter si vous souhaitez collaborer sur un projet, si vous avez des questions ou si vous souhaitez simplement prendre contact."}
                    </p>

                    {/* contact */}
                    <div className="w-full flex justify-center">
                        <Social />
                    </div>



                </div>
                <div className="text-center my-8">
                    <p className={`mt-2 text-base ${dark === false ? "text-gray-300/70" : "text-gray-600"}`}>
                        {isFr === false ? "The website is build with React. Thanks for visiting ❤️ & have a nice day" : "Le site est construit avec React. Merci de votre visite ❤️ et passez une bonne journée"}
                    </p>

                </div>
            </div>

        </div>
    )
}