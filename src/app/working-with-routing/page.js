"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const RoutingComp = () => {
    const router = useRouter();

    return (
        <>
            <h1>RoutingComp</h1>
            <div className='flex gap-x-4'>
                <button className='bg-black p-4 rounded-lg text-white font-semibold' onClick={() => { router.push("login/student-login") }}>login student</button>
                <button className='bg-black p-4 rounded-lg text-white font-semibold' onClick={() => { router.push("login/teacher-login") }}>login teacher</button>
                <Link href="/about" className='bg-red-400 p-4 rounded-lg text-white font-semibold'>Go To About</Link>
            </div>
        </>
    )
}

export default RoutingComp