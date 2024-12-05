import Social from "./social";

export default function Footer({ isFr, dark }) {
    return (
        <div>
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
    )
}