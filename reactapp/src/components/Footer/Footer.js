import React from 'react';
export default function Footer() {
    return (
        <footer className='bg-fo2 bg-no-repeat bg-100%'>
            <div className="grid grid-cols-8 px-8">
                <div className="col-span-4 text-black text-4xl flex justify-center pt-10">
                    <div className='h-52 items-center'>
                        <p className="items-center text-2xl pt-10 px-10">
                            Follow me on social media to receive occasional
                            updates about new candy, freebies, giveaways, and sales!
                        </p>
                        <div className='pt-10 ml-24 flex'>
                            <input type="text" name="text" className="mt-1 mr-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Your Name" />
                            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                        </div>
                        <button type="button" className="text-white bg-[#93c5fd] hover:bg-[#60a5fa] font-medium ml-72 rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">Submit</button>
                       
                        <div className={"lg:flex flex-grow items-center pt-56 ml-24"}>
                            <a className="px-3 py-2 flex items-center text-xl uppercase leading-snug text-midnight hover:opacity-75" href='#about'                               >
                                <i className="text-midnight"></i><span >Home</span>
                            </a>
                            <a className="px-3 py-2 flex items-center text-xl uppercase leading-snug text-midnight hover:opacity-75" href="#store"                                >
                                <i className="fab fa-twitter text-lg leading-lg text-midnight opacity-75"></i><span>Store</span>
                            </a>
                            <a className="px-3 py-2 flex items-center text-xl uppercase leading-snug text-midnight hover:opacity-75" href="#about"                                >
                                <i className="fab fa-pinterest text-lg leading-lg text-midnight opacity-75"></i><span>About</span>
                            </a>
                            <p className="px-3 py-2 flex items-center text-xl leading-snug text-midnight hover:opacity-75">©2022 Mai Nguyen</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4"></div>
            </div>
        </footer>

    );
}

