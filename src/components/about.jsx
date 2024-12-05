// components/About.js
export default function About({ isFr, dark }) {
    return (
        <div className="mt-7">
            <h3 className="text-lg font-bold">{isFr ? "À propos" : "About"}</h3>
            <p className={`mt-2 text-base font-semibold ${dark ? "text-gray-600" : "text-gray-300/70"}`}>
                {isFr
                    ? "Bonjour, je m'appelle Ayoub et je suis marocain. Je suis développeur front-end. J'aime résoudre les défis et les problèmes que je rencontre, et je travaille toujours pour améliorer mes compétences et entreprendre de nouveaux projets."
                    : "Hi, I'm Ayoub from Morocco. I’m a front-end developer. I enjoy solving challenges and problems I encounter, and I’m always working to improve my skills and take on new projects."}
            </p>
        </div>
    );
}
