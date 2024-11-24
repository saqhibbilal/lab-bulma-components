import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';

function SignupForm() {
    return (
        <div className='signup'>
            <form className='form'>
                <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
                <FormField label='Email' type='email' placeholder='e.g. alex@example.com' />
                <FormField label='Password' type='password' placeholder='e.g. password123' />
                <button className='button' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;