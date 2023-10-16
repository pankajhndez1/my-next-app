"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const WorkingWithCatchAll = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const Router = useRouter();

    let num = getRandomInt(1, 10)
    return (
        <div>
            <p className='text-xl font-bold'>WorkingWithCatchAll</p>
            <button  className='bg-gray-400 p-4 border-2 border-black'
             onClick={() => { Router.push(`catch-all/${num}/lecture`) }}>see multiple urls</button>
        </div>
    )
}

export default WorkingWithCatchAll