import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Social() {

    return (

        <div className="flex mt-6 space-x-4">
            {/* GitHub */}
            <div className="relative group inline-block">
                <a
                    rel="noreferrer"
                    href="https://github.com/Ayoub-Benanberg"
                    target="_blank"
                    aria-label="GitHub"
                    className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"
                >
                    <FaGithub className="w-6 h-6" />

                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                    GitHub
                </span>
            </div>
            {/* LinkedIn */}
            <div className="relative group inline-block">
                <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ayoub-benanberg-4b94b2295/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"

                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                    LinkedIn
                </span>
            </div>

            {/* X */}
            <div className="relative group inline-block">
                <a
                    rel="noreferrer"
                    href="https://x.com/ABenanberg"
                    target="_blank"
                    aria-label="X"
                    className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"

                >
                    <FaXTwitter className="h-6 w-6" />
                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                    X
                </span>
            </div>

            {/* Email */}
            <div className="relative group inline-block">
                <a
                    rel="noreferrer"
                    href="mailto:ayoub4benanberg@gmail.com"
                    aria-label="Email"
                    className="inline-flex items-center justify-center p-1.5 bg-transparent hover:bg-[#2e2e2e] hover:text-white transition-colors duration-200 border border-[#2e2e2e] rounded-lg"

                >
                    <MdEmail className="w-6 h-6" />
                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#2e2e2e] text-white text-xs px-2 py-1 rounded-md">
                    ayoub4benanberg@gmail.com
                </span>
            </div>

        </div>
    )
}