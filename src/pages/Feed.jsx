import React, { useEffect, useState } from 'react'
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const Feed = () => {
  const [posts, setPosts] = useState([])
  const postsCollectionRef = collection(db, "posts")
  const [menu, setMenu] = useState(false)
  console.log(menu);

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    const getPosts = async () => {
      //Read data
      try {
        const data = await getDocs(postsCollectionRef)
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(filteredData);
        setPosts(filteredData)
      } catch (error) {
        console.error(error)
      }
      //set data      
    }
    getPosts()
  }, [])
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <nav className='mt-3 flex items-center justify-between'>
        <div className='flex items-center'>

          <div id="profileImg" className='mr-4'>
            <Link to='profile'>
              <img
                src="https://via.placeholder.com/60x60"
                alt="placeholder"
                className='rounded-full '
              />
            </Link>
          </div>
          <div id="profileName">
            <p className='font-Karla font-normal text-sm text-black text-opacity-35 leading-[10px] '>Welcome Back</p>
            <p className='font-Karla font-bold text-black text-xl'>Kundan</p>
          </div>

        </div>
        <div>
          <GiHamburgerMenu onClick={() => setMenu(!menu)} />
          {
            menu && (
              <div className='p-3 absolute top-10 right-10 rounded-lg bg-black bg-opacity-50'>
                <Link to="/profile" className='block text-white hover:text-gray-300' > Profile</Link>
                <div className="border-t border-gray-400 my-2"></div>
                <div onClick={logOut} className="cursor-pointer text-white hover:text-gray-300">Sign Out</div>
              </div>
            )
          }
        </div>
      </nav>
      <h1 className='mt-7 text-3xl font-Karla font-bold'>Feeds</h1>
      <section id="posts" className='mt-7'>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        )
        )}
      </section>
      <CreatePost />

    </div>
  )
}

export default Feed
