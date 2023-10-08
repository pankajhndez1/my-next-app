"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


const NavigationWork = () => {
    const Router = useRouter();
    return (
        <>
            <div>Navigation Work</div>
            <div className='flex gap-x-1'>
                <button className='p-4 rounded-lg bg-gray-600 hover:rounded-none hover:bg-slate-800 text-white border- border-black' onClick={() => Router.push("about")}>go to about</button>
                <button className='p-4 rounded-lg bg-gray-600 hover:rounded-none hover:bg-slate-800 text-white border- border-black' onClick={() => Router.push("login")}>go to login</button>
            </div>
        </>
    )
}

export default NavigationWork;