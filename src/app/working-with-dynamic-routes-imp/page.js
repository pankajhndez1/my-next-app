import React from 'react'
import Link from "next/link"

const myArr = [{ name: 'Pankaj', roll: 1 }, { name: 'Raj', roll: 2 }, { name: 'Sam', roll: 3 }]

const MyData = ({ myArr }) => {
    const data = myArr && myArr.map((ele) => {
        return (
            <div className='flex flex-row gap-4'>
                <Link href={`working-with-dynamic-routes-imp/${ele && ele.roll}`}>Name :{ele && ele.name}</Link>
            </div>
        )
    })
    return (
        <div>
            { data }
        </div>
    )
}

const WorkingWithDynamicRoutes = () => {
    return (
        <div>
            <p className='text-xl font-bold'>WorkingWithDynamicRoutes Imp Topics and folder structure !!</p>
            <MyData myArr={myArr} />
        </div>
    )
}

export default WorkingWithDynamicRoutes