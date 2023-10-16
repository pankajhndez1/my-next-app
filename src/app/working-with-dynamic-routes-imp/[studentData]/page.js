import React from 'react'

const page = ({ params }) => {
    console.log(params, 'params');
    const { studentData } = params;
    return (
        <div>Roll number :{studentData}</div>
    )
}

export default page