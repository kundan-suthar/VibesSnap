import React, { useEffect, useState } from 'react'
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"

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

      } catch (error) {
        console.error(error)
      }
      //set data      
    }
    getPosts()
  }, [])
  return (
    <>
      <nav>
        <div id="profileImg">

        </div>
        <div id="profileName">
          <p>Welcome Back</p>
          <p>Kundan: need to update to current user</p>
        </div>
      </nav>
    </>
  )
}

export default Feed
