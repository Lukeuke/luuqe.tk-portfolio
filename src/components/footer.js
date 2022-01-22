import React from 'react';
import {FaGithub, FaYoutube, FaFacebook, FaTwitter} from 'react-icons/fa';

function Footer() {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                    <a className="text-xl m-1 p-1 sm:m-2 hover:bg-gray-800 rounded-full hover:text-white trasition-colors duration-300" href="https://github.com/Lukeuke">
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                    </a>

                    <a className="text-xl m-1 p-1 sm:m-2 hover:bg-gray-800 rounded-full hover:text-white trasition-colors duration-300" href="https://youtube.com/CreamCS">
                        <FaYoutube />
                        <span className="sr-only">YouTube</span>
                    </a>

                    <a className="text-xl m-1 p-1 sm:m-2 hover:bg-gray-800 rounded-full hover:text-white trasition-colors duration-300" href="https://facebook.com">
                        <FaFacebook />
                        <span className="sr-only">Facebook</span>
                    </a>

                    <a className="text-xl m-1 p-1 sm:m-2 hover:bg-gray-800 rounded-full hover:text-white trasition-colors duration-300" href="https://twitter.com/BigAnimeAss">
                        <FaTwitter />
                        <span className="sr-only">Twitter</span>
                    </a>
            </div>
            <div className="flex justify-center mt-3">
                <p className="text-gray-900 md:text-base mb-4 border-b-2 sm:text-base">Website created by <a className="text-blue-500 hover:text-blue-800 trasition-colors duration-300" href="mailto:luuqebusiness@gmail.com">Łukasz Mrowiec</a></p>
            </div>
        </div>
    )
}

export default Footer;