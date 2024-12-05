// components/Projects.js
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Projects({ data, isFr, dark }) {
    return (
        <div>

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
    );
}
