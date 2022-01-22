import { FaMailBulk } from 'react-icons/fa';

export default function Contact() {
    return(
            <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
                <h1 className="text-2xl sm:text-4xl">Interested about collaboration?</h1>
                <a href="mailto:luuqebusiness@gmail.com">
                    <span className="mt-6 inline-block w-auto bg-gray-800 font-display text-white">
                        <div className="flex flex-row items-center">
                            <span className="mr-3">Mail me!</span>
                            <FaMailBulk color="white"/>
                        </div>
                    </span>
                </a>
            </div>
    )
}