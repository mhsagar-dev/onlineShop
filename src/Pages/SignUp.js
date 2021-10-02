import React from 'react';
import { useForm } from "react-hook-form";
import Navmenu from '../components/Navmenu';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container mt-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-5'>
                    <h1>
                        Khabar Daw
                    </h1>
                    <h3>Create a free account</h3>
                </div>
                <div className='col-md-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control' placeholder='First Name' {...register("firstName")} />
                        <br />
                        <input className='form-control' placeholder='Lastname Name' {...register("lastname")} />
                        <br />
                        <input className='form-control' placeholder='@username' {...register("username")} />
                        <br />
                        <input className='form-control' placeholder='@email' {...register("email")} />
                        <br />
                        <input className='form-control' placeholder='Password' {...register("password")} />
                        <br />
                        <input placeholder='Create' className='form-control btn btn-danger' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;