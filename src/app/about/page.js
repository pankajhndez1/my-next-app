import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <p>About Page</p>
            <Link href="/login">go to Login</Link>
        </div>
    )
}

export default About