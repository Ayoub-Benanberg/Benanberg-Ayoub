import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3, FaBootstrap, FaPython, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default function Projects({ data, isFr, dark }) {
    const [loading, setLoading] = useState(true);
    const [dots, setDots] = useState(".");

    // Simulate data fetching/loading
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2s delay
        return () => clearTimeout(timer);
    }, []);

    // Animation for typing dots
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setDots((prev) => (prev.length < 3 ? prev + "." : "."));
            }, 500);
            return () => clearInterval(interval);
        }
    }, [loading]);

    return (
        <div>
            {loading ? (
                <div className="p-4">
                    <p className={`text-xl ${dark === false ? "text-gray-300" : "text-gray-600"}`}>
                        <span className="flex justify-start items-center gap-2 text-sm">
                            <AiOutlineLoading className="animate-spin duration-100" />
                            <span className="text-md">Loading {dots}</span>
                        </span>
                    </p>
                </div>
            ) : (
                data.map((project) => (
                    <div key={project.id} className={`p-4 mt-6 bg-gray-600/5 rounded-lg shadow-lg`}>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="flex flex-col p-1">
                                    {/* project title */}
                                    <h3 className="font-bold">{project.title}</h3>
                                    {/* project description */}
                                    <p
                                        className={`text-sm ${dark === false ? "text-gray-300/70" : "text-gray-600"
                                            }`}
                                    >
                                        {isFr === false
                                            ? project.description.en
                                            : project.description.fr}
                                    </p>
                                </div>
                            </div>

                            {/* visit repo and website */}
                            <div className="flex gap-2">
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
                                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                                        Source Code
                                    </span>
                                </div>

                                <div className={`relative group inline-block ${project.url?"":"hidden"}`}>
                                    <a
                                        rel="noreferrer"
                                        href={project.url}
                                        target="_blank"
                                        aria-label="url"
                                        className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"
                                    >
                                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                    </a>
                                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                                        Visit Website
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* technologies */}
                        <div className="flex py-3 gap-x-4">
                            {project.technologies.map((tec, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-0.5 font-semibold px-1 text-sm border border-[#2e2e2e] rounded-full"
                                >
                                    {tec.name === "React" && <FaReact className="w-4 h-4" />}
                                    {tec.name === "Tailwind CSS" && <RiTailwindCssFill className="w-4 h-4" />}
                                    {tec.name === "HTML" && <FaHtml5 className="w-4 h-4" />}
                                    {tec.name === "CSS" && <FaCss3 className="w-4 h-4" />}
                                    {tec.name === "Bootstrap" && <FaBootstrap className="w-4 h-4" />}
                                    {tec.name === "Python" && <FaPython className="w-4 h-4" />}
                                    {tec.name === "Javascript" && <IoLogoJavascript className="w-4 h-4" />}
                                    {tec.name === "Typescript" && <SiTypescript className="w-4 h-4" />}
                                    {tec.name === "Next" && <RiNextjsFill className="w-4 h-4" />}
                                    {tec.name === "Laravel" && <FaLaravel className="w-4 h-4" />}



                                    <span className="px-1">{tec.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
