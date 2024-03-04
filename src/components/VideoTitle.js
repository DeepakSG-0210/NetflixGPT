import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-24 w-screen aspect-video absolute bg-gradient-to-r from-black text-white'>
            <h1 className='text-4xl font-extrabold'>{title}</h1>
            <p className='py-6 text-md w-1/3'>{overview}</p>
            <div className='flex'>
                <button className='flex bg-white items-center justify-center text-black text-lg py-2 px-12 mr-2 rounded-lg hover:bg-opacity-70'><FaPlay className='pr-1'/>Play</button>
                <button className='flex bg-gray-600 justify-center text-white py-2 text-lg px-12 mx-2 bg-opacity-50 rounded-lg'><FaInfoCircle className='pr-1 flex mt-1.5' />More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle