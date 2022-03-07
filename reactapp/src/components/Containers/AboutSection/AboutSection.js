import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
export default function AboutSection() {
    return (
        <div className='flex flex-wrap justify-center'>
            <h2 className='flex flex-wrap justify-center text-4xl mb-4 underline decoration-[#f472b6]' id='about'>About Me</h2>
            <div className="items-center justify-between">
                <div className="grid grid-cols-8 px-8">
                    <div className="col-span-4 flex items-center justify-center bg-pack pt-10 bg-70% h-screen bg-no-repeat bg-top">
                    </div>
                    <div className="col-span-4 text-black text-4xl flex justify-center pt-10 bg-pink-300 rounded-lg">
                        <div className='h-52 '>
                            <h3 className='flex flex-wrap justify-center'>Hello! This is Mimi Shop.</h3>
                            <p className="text-justify text-2xl pt-10 px-10">
                                The online bulk candy store that has over 6,000 fresh candies ready
                                for delivery directly to your door! Are you having trouble finding treats
                                and party supplies near you? We make it effortless to find candies by color, flavor
                                (mint, sour, and spicy), event (birthday, wedding, baby shower), or holiday
                                (Christmas, Valentines Day, Easter, or Halloween).
                            </p>
                            <br></br>
                            <div className='flex space-x-5 float-right text-5xl'><BsInstagram color='#54d8cb'/><AiFillTwitterCircle color='#E25C5C'/><BsFacebook color='#72b8f1'/></div>
                            
                        </div>
                    </div>
                </div>
                <div className="relative leading-normal tracking-normal text-white gradient vsc-initialized">
                    <svg className="wave-top" viewBox="0 0 1439 147" version="1.1">
                        <g transform="translate(-1.000000, -16.000000)" >

                            <g transform="translate(10.000000, 20.000000)" fill="#FFFFFF">
                                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                                </g>
                            </g>
                            <g className="wave" fill="#f8fafc">
                                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                            </g>
                        </g>
                    </svg>
                    <div className='mx-3'>
                        <div className="grid grid-cols-8">
                            <div className="col-span-4 text-black text-4xl flex justify-center pt-10 rounded-lg">
                                <div>
                                    <h3 className='flex flex-wrap justify-center animate-bounce'><BsHeartFill color="#f87171" className="mr-1"></BsHeartFill>Candy<BsHeartFill color="#f87171" className="ml-1"></BsHeartFill></h3>
                                    <p className="text-justify text-2xl pt-10 px-10">
                                        Candy, also called sweets or
                                        lollies, is a confection that features sugar as a principal ingredient.
                                        The category, called sugar confectionery, encompasses any sweet confection,
                                        including chocolate, chewing gum, and sugar candy. Vegetables,
                                        fruit, or nuts which have been glazed and coated with sugar are said to be candied.
                                    </p>                                    
                                </div>
                            </div>
                            <div className="col-span-4 flex items-center justify-center bg-insta bg-40% bg-no-repeat bg-top h-screen">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
