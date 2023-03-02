import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2"
import img1 from "../../Assets/banner-images/img1.png"
import img2 from "../../Assets/banner-images/img2.png"
import img3 from "../../Assets/banner-images/img3.png"
import img4 from "../../Assets/banner-images/img4.png"
import ScrollToTop from '../Shared/ScrollToTop';

const solutions = [
    {
        id: 1,
        img: img1,
        title: "Chat With Doctor"
    },
    {
        id: 2,
        img: img2,
        title: "Health Shop"
    },
    {
        id: 3,
        img: img3,
        title: "Make an Hospital Appointment"
    },
    {
        id: 4,
        img: img4,
        title: "Medical Appointments"
    }
]

const Banner = () => {
    return (
        <div style={{
            background: "url(https://www.halodoc.com/assets/img/home-v2/webp/home-banner-v3.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }} className="h-[450px] mx-auto container">
            <ScrollToTop />

            <div className="pt-20 w-full lg:w-1/2 px-4 lg:px-16">
                <h2 className="text-[23px] md:text-4xl font-semibold text-[#333] mb-4">Complete Health Solutions</h2>
                <p className="text-[#53565a] text-lg md:text-xl leading-7">Chat with doctors, visit hospitals, buy medicine, check labs and update information about health, everything can be done at Halodoc!
                </p>
            </div>
            <div className='hidden md:flex flex-wrap items-start gap-5 mt-8 px-4 lg:px-16'>
                {
                    solutions.map(s => (
                        <button key={s.id} className="w-[115px] text-center shadow-sm hover:shadow-2xl duration-300 p-2 rounded bg-white">
                            <div className='w-[70px] h-[70px] mx-auto mb-2'>
                                <img src={s.img} alt="" />
                            </div>
                            <p className='text-[#333] font-semibold'>{s.title}</p>
                        </button>
                    ))
                }
                <button className='hidden lg:block text-start py-6 mt-6 px-4 rounded shadow-sm hover:shadow-2xl duration-300 bg-white'>
                    <div className='flex items-center justify-between text-xl font-semibold mb-2'>
                        <h5 className='text-[#333]'>Connect Insurance</h5>
                        <HiArrowLongRight className='text-[#e0004d]' />
                    </div>
                    <p className='text-[#53565a]'>Enjoy your insurance benefits for
                        <br />
                        Halodoc services</p>
                </button>
            </div>
            <button className='block md:hidden text-start py-6 mt-6 px-4 rounded shadow-sm hover:shadow-2xl duration-300 bg-white'>
                <div className='flex items-center justify-between text-xl font-semibold mb-2'>
                    <h5 className='text-[#333]'>Connect Insurance</h5>
                    <HiArrowLongRight className='text-[#e0004d]' />
                </div>
                <p className='text-[#53565a]'>Enjoy your insurance benefits for
                    <br />
                    Halodoc services</p>
            </button>
        </div>
    );
};

export default Banner;