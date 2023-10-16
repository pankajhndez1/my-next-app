"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({ children }) => {
    const isPath = usePathname();
    console.log(isPath, 'isPath');
    return (
        isPath !== "/working-with-conditional-layout/comp-1" ? <div>
            <p className='text-xl font-bold text-black'>Navbar</p>
            <div>{children}</div>
            <p className='text-xl font-bold text-black'>Footer</p>
        </div> : null
    )
}

export default layout