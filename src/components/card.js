import React from 'react';
import profile from '../img/profile.png';
import {FaGithub, FaYoutube, FaFacebook, FaTwitter} from 'react-icons/fa';

function Card() {
    return(
        <div className="w-full duration-300">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-x1 p-5">
                <div className="">
                    <img className="w-32 mx-auto blur-none shadow-xl rounded-full drop-shadow-sm" src={profile} alt=""/>
                </div>
                
                <div className="text-center mt-5">
                <p className="text-xl sm:text-2xl text-grey-900">Luuqe</p>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Freelance Web Developer & Unity Developer</p>
                </div>

                <div className="flex align-center mt-3 justify-around">
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
            </div>
        </div>
    )
}

export default Card;