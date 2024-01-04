'use client'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from 'cookies-next';

const getLocalItem = () => {
    let userList = localStorage.getItem("userList");
    if (userList) {
      return JSON.parse(localStorage.getItem("userList"));
    } else {
      return [];
    }
  };

const Login = () => {
    const [data, setData] = useState(getLocalItem())
    const router = useRouter();
    const {handleSubmit, handleChange, values}  = useFormik({
        initialValues : {
            username : '',
            userpassword : '',
        },
     onSubmit: (values) => {
        if (values.username.trim() !== '' && values.userpassword.trim() !== '') {
          const userExists = data.some((user) => (
            user.username === values.username && user.userpassword === values.userpassword
          ));
          if (userExists) {
            toast.success("User login successfully");
            setCookie('logged', 'true');
            router.push('/dashboard')
          } else {
            toast.error("User doesn't exist");
          }
        }
        else {
          toast.error("Please enter data");
        }
      }
    })
    return (
        <>
          <ToastContainer />
            <div className="container-fluid containe-for-sub-box ">
                <div className="row">
                    <div className="col">
                        <div className="parent-form-div">
                            <div className="sub-form-data">
                                <div className="form-top-heading mt-2">LogIn</div>
                                <form className='mt-2' onSubmit={handleSubmit}>
                                    <div className="user-name-feild-div">
                                        <label htmlFor="" className='user-name-label-feild'> UserName 
                                        </label>
                                        <input type="text" name='username'
                                        className='user-name-input mt-2'
                                        onChange={handleChange}
                                        value={values.username} />
                                    </div>
                                    <div className="user-password-feild mt-5">
                                        <label htmlFor="" className='user-password-label-feild'> Password    </label>
                                        <input type="password" name='userpassword'
                                        className='user-password-input mt-2' 
                                        onChange={handleChange} 
                                        value={values.userpassword} 
                                        />
                                    </div>
                                    <br />
                                    <center>
                                        <button className="btn text-white" type='submit'
                                        style={{backgroundColor : '#2c3e50'}}> Login 
                                        </button>
                                    </center>
                                    <br />
                                    <center className='p-2'>
                                        <Link href="./signup" className='text-dark'> 
                                        Don't have account ? Register Now
                                        </Link>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login