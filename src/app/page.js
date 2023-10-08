"use client"
// so in order to work with the events in the next js we have to use the "useClient"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>I am About page</h1>
        {/*below you are using an arrow function (Myfunc) as a component in Next.js. This is completely valid and is a common way to define functional components in React, which Next.js is built upon. */}
        <Link href={"/login"}>go to login</Link>
        <Myfunc />
        <div className='flex flex-col gap-y-2 border2 border-black'>
          <button className='bg-red-500 p-4 rounded-lg w-1/4 ' onClick={() => { router.push("/working-with-routing") }}>see working with nested rounting page</button>
          <button className='bg-gray-500 p-4 rounded-lg w-1/4' onClick={() => { router.push("/working-with-common-layout") }}>
            see working with Common layout page
          </button>
        </div>

      </div>
    </>
  )
}

const Myfunc = () => {
  return (
    <>
      <h2>Hii there !!!</h2>
      <button onClick={() => { alert("Hii there !!") }}>click me</button>
      <Link href={"/about"}>go to about</Link>
    </>
  )
}

// ok why do we use <Myfunc /> like this and why don't we use it like {MyFunc()} what is the difference and what will be the effect on the performance of an application

// In React, there is a significant difference between using `<Myfunc />` and `{MyFunc()}` in terms of how components are rendered and what they return. Let's explore the differences and their impact on performance:

// 1. `<Myfunc />` (JSX Syntax):
// - This is used to render a React component (functional or class) as a JSX element.
// - When you use `<Myfunc />`, React treats `Myfunc` as a component and calls its `render` method (if it's a class component) or executes its function body (if it's a functional component) to generate the JSX to be rendered.
// - It creates an instance of the component and manages its lifecycle, including mounting and unmounting.
// - This is the recommended way to render components in React and Next.js, as it follows the component lifecycle and provides better control over rendering and re-rendering when state or props change.

// 2. `{MyFunc()}` (JavaScript Function Invocation):
// - This is not used to render a React component. Instead, it directly calls the `MyFunc` function and inserts its return value into the JSX at that point.
// - This approach is typically used for calling regular JavaScript functions or displaying dynamic content within JSX.
// - If `MyFunc` is a regular JavaScript function (not a React component), this is the correct way to invoke it.

// Performance Impact:
// - Using `<Myfunc />` as a JSX element is more efficient when working with React components because React can manage the component's lifecycle, optimizing rendering and re-rendering. It ensures that components update only when necessary.
// - `{MyFunc()}` will not be as efficient for rendering React components because it doesn't allow React to manage the component's lifecycle properly. Instead, it treats `MyFunc` as a regular JavaScript function call, and the component won't benefit from React's optimization mechanisms.

// In summary, when you want to render a React component, always use the `<ComponentName />` syntax to ensure that React can manage the component's lifecycle and optimize rendering. Using `{MyFunc()}` is suitable for invoking regular JavaScript functions or inserting dynamic values into JSX but is not meant for rendering React components. Using the correct syntax will help maintain good performance in your React and Next.js applications.


// Interview Question :

//  the differnce between the dependencies and devDependecies is that the dependencies used in both i.e development mode as well as in the production mode but the devDependecies only used the development mode !!


// Server Component :

// • Render on the Server Side
// By default, All components are Server components.
// ● They are closer to the Backend
// • So BE-related logic and code should write
// in Server components
