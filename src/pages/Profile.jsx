import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { allPosts } from '../features/posts/postSlice'
import PostCard from '../components/PostCard';

const Profile = () => {
  const posts = useSelector(allPosts)
  const [edit, setEdit] = useState(false)
  const { currentUser, profile } = useSelector((state) => state.user);
  console.log(currentUser);
  const onSaveHandle = () => {
    setEdit(false)
  }
  return (
    <div className='relative w-full h-full '>
      <Link to='/' className='absolute left-2 top-2' >
        <IoMdArrowRoundBack className='w-7 h-7' />
      </Link>
      <div className='w-full overflow-hidden rounded-bl-2xl rounded-br-2xl'>
        <img src="./asset/profile_bg.png" alt="bg image" className='w-full h-full object-cover' />
        <div className={`${edit ? 'flex' : 'hidden'} absolute right-4 top-[45%] rounded-full bg-gray-200  items-center justify-center w-10 h-10`}>
          <MdEdit className='w-6 h-6' />
        </div>
      </div>
      <div className='flex justify-end mt-2 '>
        <img src={currentUser.photoURL} alt="" className={`${edit ? 'top-[50%]' : 'top-[25%]'}  rounded-full w-25 h-25 absolute  left-5`} />
        <div className={`${edit ? 'flex ' : 'hidden'} absolute left-20 top-[60%] rounded-full bg-gray-200  items-center justify-center w-7 h-7`}>
          <MdEdit className='w-6 h-6' />
        </div>
        <button
          className='border border-black rounded-full p-2 px-12 mr-4 w-48 font-Karla font-semibold'
          onClick={() => setEdit(true)}
        >Edit Profile</button>
      </div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
        {
          edit ?
            (
              <div className='absolute w-[90%]'>
                <form>

                  <div class="mb-6">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 p-2"
                      placeholder="Enter your name"
                    />
                  </div>


                  <div class="mb-6">
                    <label for="bio" class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="3"
                      class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 p-2"
                      placeholder="Write a short bio"
                    ></textarea>
                  </div>
                </form>
              </div>)
            :
            (
              <div className=''>
                <h2 className='text-2xl font-Karla font-bold'>{currentUser.displayName}</h2>
                <p>add your bio</p>
              </div>
            )
        }
        <div className={`${edit ? 'hidden' : 'block'}  `}>

          <h3 className='text-xl font-Karla font-bold mt-5'>My Posts</h3>
          <section id="posts" className='mt-7'>
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            )
            )}
          </section>
        </div>
        <div className={`${edit ? 'block' : 'hidden'} absolute bottom-[-320px] `}>
          <button
            className='bg-slate-950 text-white font-Karla font-normal text-lg p-2 
              absolute rounded-full mx-auto w-[350px]'
            onClick={onSaveHandle}
          >Save</button>
        </div>
      </div>


    </div>
  )
}

export default Profile
