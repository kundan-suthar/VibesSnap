import React from 'react'
import { LuHeart } from "react-icons/lu";
import { BsSendFill } from "react-icons/bs";

const PostCard = ({ post }) => {
    const { postOwnerName, postDescription, profileImageURL, timeStamp } = post
    return (
        <article className='p-2 rounded-lg bg-pink-200'>
            <div className='flex items-center'>
                <div className='mr-3'>
                    <img src="https://via.placeholder.com/60x60" alt="" className='rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <p className='leading-[10px] font-Karla font-bold text-[16px] '>{postOwnerName}</p>
                    <p className='font-Karla font-normal text-opacity-35 '>{timeStamp}</p>
                </div>
            </div>
            <div>
                {postDescription}
            </div>
            <div id="btns" className='flex justify-between mt-3 mx-5'>
                <LuHeart className='w-8 h-8' />
                <button className='flex gap-3 items-center justify-center bg-pink-100 p-2 rounded-full'>
                    <BsSendFill /> Share
                </button>
            </div>

        </article>
    )
}

export default PostCard
