import React, { useEffect, useState } from 'react'
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'
import { Link } from 'react-router-dom'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const postsCollectionRef = collection(db, "posts")

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
      <nav className='mt-3 flex items-center'>
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
