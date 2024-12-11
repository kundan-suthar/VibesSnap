import React, { useEffect, useState } from 'react'
import { auth, db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../features/posts/postSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authProfile } from '../features/auth/authSlice'
import { signOut } from 'firebase/auth'
import { allPosts } from '../features/posts/postSlice'
const Feed = () => {
  const posts = useSelector(allPosts)
  const [user, setUser] = useState(null)


  const navigate = useNavigate()
  const postsCollectionRef = collection(db, "posts")
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()

  console.log(menu);

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
      console.log(user);

    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  useEffect(() => {


    const getPosts = async () => {
      //Read data
      try {
        const data = await getDocs(postsCollectionRef)
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(filteredData);
        dispatch(setItems(filteredData));
      } catch (error) {
        console.error(error);
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
                src={user?.photoURL}
                alt="placeholder"
                className='rounded-full w-10 h-10'
              />
            </Link>
          </div>
          <div id="profileName">
            <p className='font-Karla font-normal text-sm text-black text-opacity-35 leading-[10px] '>Welcome Back</p>
            <p className='font-Karla font-bold text-black text-xl'>{user?.displayName}</p>
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
