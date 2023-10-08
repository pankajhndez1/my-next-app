import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='font-bold text-lg text-white'>
            <p className='bg-red-400'>Login</p>
            <div className='mt-4'>
            <Link href="about" className='text-black border p-4 bg-slate-700   rounded-lg w-3/4'>go to about</Link>
            </div>

            <div className='mt-8'>
            <Link href="working-with-navigation" className='text-white border p-4 bg-slate-700   rounded-lg w-3/4'> naviagte to working with navigation</Link>
            </div>
        </div>
    )
}

export default Login