import React from 'react';
import { BsFlower1 } from "react-icons/bs";
export default function NavBar() {
    return (
        <div className="relative items-center justify-between bg-pack-train px-8 py-3 mb-3">
            <nav className="relative flex flex-wrap items-center justify-between px-8 py-3 bg-inherit mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full contents justify-between lg:w-auto lg:static lg:justify-start" id="home">
                        <BsFlower1 color='#f59e0b' className='text-2xl' />
                        <a
                            className="text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-purple animate-pulse"
                            href="#pablo">
                            MIMISHOP
                        </a>
                        <BsFlower1 color='#f59e0b' className='text-2xl' />

                    </div>
                    <div className={"lg:flex flex-grow items-center"}
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-purple hover:opacity-75" href='#about'                               >
                                    <i className=" text-purple"></i><span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-purple hover:opacity-75" href="#store"                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-purple opacity-75"></i><span className="ml-2">Store</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-purple hover:opacity-75" href="#about"                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-purple opacity-75"></i><span className="ml-2">About</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
