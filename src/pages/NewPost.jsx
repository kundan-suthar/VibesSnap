import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiImageOn } from "react-icons/ci";

const NewPost = () => {
    return (
        <div id='newPost' className='container mx-auto px-4 sm:px-6 lg:px-8 mt-4 '>
            <Link to='/' className='flex items-center gap-4 mb-9' >
                <IoMdArrowRoundBack className='w-7 h-7' />
                <span className='text-xl font-Karla font-bold'>Back</span>
            </Link>
            <div className='flex justify-center flex-col items-center'>
                <div className='border border-black border-opacity-40 w-80 h-80 rounded-xl flex flex-col justify-center items-center'>
                    <CiImageOn className='w-32 h-32' />
                    <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                        Upload File
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                    />
                </div>
                <textarea
                    className="w-80 h-32 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-1 f p-4 text-gray-700 resize-none mt-4"
                    placeholder="Write a description for your post..."
                ></textarea>
                <button className='bg-black p-4 w-64 text-white rounded-full mt-5'>CREATE</button>
            </div>
        </div>
    )
}

export default NewPost
