"use client"
import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from '@/schemas';


const FormikFormWork = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:signupSchema,
        validateOnChange:true,
        validateOnBlur: false,
        onSubmit: (values, action) => {
            console.log(values, 'values');
            return action.resetForm();
        }
    });
    const { handleSubmit, errors, handleChange, handleBlur, touched, values } = formik;

    return (
        <div className='bg-slate-600 h-[100vh]'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-5 border-2 border-black justify-center content-center w-1/2 mx-auto my-auto bg-gray-300 rounded-lg p-14'>
                    <label className='text-black font-semibold pb-2' htmlFor='name'>
                         Name</label>
                    <input
                        className='bg-blue-100 border-2 border-gray-200'
                        type='name'
                        id='name'
                        name='name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        placeholder='Enter you name'
                    />
                    {errors.name && touched.name ? <p className="text-red-500">Please enter your name !!</p>:null}
                    <label className='text-black font-semibold pb-2' htmlFor='email'>Email</label>
                    <input
                        className='bg-blue-100 border-2 border-gray-200'
                        type='email'
                        id='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter your email'
                    />
                    {errors.email && touched.email && <p className="text-red-500">Please enter your email !!</p>}
                    <label className='text-black font-semibold pb-2' htmlFor='password'> Password</label>
                    <input
                        className='bg-blue-100 border-2 border-gray-200'
                        type='password'
                        id='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter your password'
                    />
                    {errors.password && touched.password && <p className="text-red-500">Please enter your password !!</p>}

                    <label className='text-black font-semibold pb-2' htmlFor='confirm_password'>Confirm Password</label>
                    <input
                        className='bg-blue-100 border-2 border-gray-200'
                        type='password'
                        id='confirm_password'
                        name='confirm_password'
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter your confirmed password'
                    />
                    {errors.confirm_password && touched.confirm_password && <p className="text-red-500">Please enter your confirmed password !!</p>}
                    <button className="border-2 bg-black text-white font-semibold" type="submit">
                        submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormikFormWork