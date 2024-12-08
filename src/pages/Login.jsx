import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router";
const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  console.log(auth?.currentUser?.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userEmail, password)

    } catch (error) {
      console.log(error);

    }
  }
  const signInwithGoogle = async () => {

    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/')
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className='h-screen'>
      <div className="grid grid-cols-3  overflow-x-scroll gap-4">

        <div>
          <img src="./asset/1.png" alt="Image 1" className="block w-[125px] h-[207px]" />
          <img src="./asset/2.png" alt="Image 2" className="block w-[125px] h-[207px] mt-4" />
          <img src="./asset/3.png" alt="Image 3" className="block w-[125px] h-[207px] mt-4" />
        </div>
        <div className="">
          <img src="./asset/7.png" alt="Image 4" className="block " />
          <img src="./asset/5.png" alt="Image 5" className="block w-[125px] h-[207px] mt-4" />
          <img src="./asset/6.png" alt="Image 6" className="block w-[125px] h-[207px] mt-4" />
        </div>

        <div>
          <img src="./asset/4.png" alt="Image 7" className="block w-[125px] h-[207px]" />
          <img src="./asset/9.png" alt="Image 8" className="block w-[125px] h-[207px] mt-4" />
          <img src="./asset/10.png" alt="Image 9" className="block w-[125px] h-[207px] mt-4" />
        </div>
      </div>
      {/* <form onSubmit={handleSubmit} className='md:w-[400px] md:h-[300px] h-[400px] w-[350px] bg-slate-200  flex flex-col p-3 '>
        <input
          type='email'
          placeholder='email'
          autoComplete='off'
          onChange={(e) => setUserEmail(e.target.value)}
          className='m-3 p-3'
        />
        <input
          type="password"
          autoComplete='off'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          className='m-3 p-3'
        />
        <button className='m-3 p-3  bg-gray-500 text-yellow-50 '>Login</button>


      </form> */}
      <div className='h-[300px] w-screen bg-white absolute bottom-[0px] left-0 right-0 rounded-tl-[48px] rounded-tr-[48px] flex flex-col justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex font-Karla text-[28px]'>
            <img src="./asset/logo.png" alt="" />
            <p>Vibesnap</p>
          </div>
          <p>Moments that matter Shared forever</p>
        </div>

        <button
          className='mx-auto p-3 w-[270px] flex items-center text-xl justify-center gap-3  bg-[#292929] text-white rounded-full'
          onClick={signInwithGoogle}
        >
          <FcGoogle className='w-7 h-7' />
          Continue with google</button>
        <div className='flex items-center justify-center'>
          <Link to='register' className='font-Karla text-xl font-semibold'>Register</Link>
        </div>
      </div>
      {/* <button className='m-3 p-3  bg-yellow-300 text-black' onClick={logOut}> Logout</button> */}
    </div>
  )
}

export default Login
