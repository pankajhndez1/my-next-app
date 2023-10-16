"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

const page = ({ params }) => {
    const myPath =usePathname();
    console.log(myPath,'myPath');
    console.log(params, 'params');
    return (
        <div>
            <p className='text-xl font-bold'>page</p>
            <p>you are trying to find the {params.data[0]}st  {params.data[1]}</p>
        </div>
    )
}

export default page