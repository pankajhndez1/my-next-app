"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const WorkingWithConditionalLayout = () => {
    const router = useRouter();
    return (
        <div>
            <p className='text-bold text-lg'>WorkingWithConditionalLayout</p>
            <button className='border-2 bg-red-400 p-4 border-rounded' onClick={() => { router.push('/working-with-conditional-layout/comp-1') }}>see comp1</button>
            <button className='border-2 bg-red-400 p-4 border-rounded' onClick={() => { router.push('/working-with-conditional-layout/comp-2') }}>see comp2</button>
        </div>
    )
}

export default WorkingWithConditionalLayout