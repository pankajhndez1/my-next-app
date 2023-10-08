import React from 'react'

const layout = ({ children }) => {
    return (

        <div className='bg-slate-500'>
            <div className='flex justify-center content-center border-2 h-full border-black '>Common layout for the working with common layout folder</div>
            {children}
        </div>
    )
}

export default layout