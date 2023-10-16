import Link from 'next/link'
import React from 'react'

const AboutNotFoundPage = () => {
    return (
        <div className='flex flex-col'>
            <div>AboutNotFoundPage</div>
            <div className='w-1/2 bg-gray-400 border-2 border-black p-4'><Link href={"/"}>go to home</Link></div>
        </div>
    )
}

export default AboutNotFoundPage