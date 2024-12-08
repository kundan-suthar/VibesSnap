import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CreatePost = () => {
    return (
        <Link
            to="/createPost"
            id='createpost'
            className='flex items-center justify-center rounded-full w-11 h-11 absolute  right-10 bottom-9 bg-black'>

            <FaPlus className='w-7 h-7 text-white' />

        </Link>
    )
}

export default CreatePost
