import React from 'react';
import sorgente from '../img/sorgente.png';
import grinch from '../img/grinch_hunt.png';
import Dino from '../img/dino.png';

function Skills() {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12" id="skills">
            <p className="text-center text-2xl text-gray-900 md:text-4xl pt-4 font-bold">My Projects</p>

            <div className="flex flex-wrap justify-center pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded sm:w-512">
                    <a href="http://sorgente.atwebpages.com/">
                        <img className="w-40" src={sorgente}/> 
                        <span className="flex flex-warp text-center text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300">Website for Sorgente Café</span>
                    </a>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded sm:w-512">
                        <a href="https://github.com/Lukeuke/Grinch-Hunt"> 
                            <img className="w-40" src={grinch}/>
                            <span className="flex justify-center text-center text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300">Grinch Hunt</span>
                            <span className="flex flex-warp text-center text-xs mt-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">(Game about Christmas)</span>
                        </a>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded sm:w-512">
                    <a href="http://dinojump.atwebpages.com/Jump.html">
                        <img className="w-40" src={Dino}/> 
                        <span className="flex flex-warp justify-center text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300">Dino Jump</span>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Skills;