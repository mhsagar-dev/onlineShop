import React from 'react';
import { useForm } from "react-hook-form";

const SignIn = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input className='form-control' placeholder='@username' {...register("username")} />
                        <br />
                        <input className='form-control' placeholder='Password' type="password" {...register("password")} />
                        <br />
                        <input value='Login' className='form-control btn btn-danger' type="submit" />
            </form>
        </div>
    );
};

export default SignIn;