'use client'
import React from 'react'
import Footer from './footer/page'
import Home from './home/page'
import Nav from './nav/page'
import { useRouter } from 'next/navigation'

const Main = () => {
    const router = useRouter();
    const commonRoutingFunc = (routeName) => {
        return(router.push(`working-with-common-layout` + `${routeName}`))
    }
    return (
        <div>
            <Nav />
            <div className='bg-gray-500 italic text-xl text-white font-semibold'>see working with Common layout page</div>
            <Home />
            <Footer />
            <div className='flex flex-row gap-x-4'>
                <button className='bg-red-300 text-white hover:text-black rounded-lg p-4' onClick={() => { commonRoutingFunc("/home") }}>see body</button>
                <button className='bg-red-300 text-white hover:text-black rounded-lg p-4' onClick={() => { commonRoutingFunc("/footer") }}>see footer</button>
                <button className='bg-red-300 text-white hover:text-black rounded-lg p-4' onClick={() => { commonRoutingFunc("/") }}>see combined</button>
                <button className='bg-red-300 text-white hover:text-black rounded-lg p-4' onClick={() => { commonRoutingFunc("/nav") }}>see nav</button>
            </div>
        </div>
    )
}

export default Main