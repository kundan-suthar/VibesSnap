import React from 'react'

const Register = () => {
  return (
    <div className='h-screen bg-gray-900 grid place-content-center'>
    <form className='md:w-[400px] md:h-[300px] h-[400px] w-[350px] bg-slate-200  flex flex-col p-3 '> 
      <input type='email' placeholder='email' autoComplete='off' className='m-3 p-3' />
      <input type="password" autoComplete='off' placeholder='password' className='m-3 p-3' />
      <button className='m-3 p-3  bg-gray-500 text-yellow-50 '>register</button>
    </form>
</div>
  )
}

export default Register
