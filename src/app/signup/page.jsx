'use client'
import { useFormik } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getLocalItem = () => {
    let userList = localStorage.getItem("userList");
    if (userList) {
      return JSON.parse(localStorage.getItem("userList"));
    } else {
      return [];
    }
  };

const Signup = () => {
    const [userList, setUserList] = useState(getLocalItem());
    const router = useRouter();
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            username : '',
            userpassword : '',
        },

        onSubmit: (values) => {
            if (values.username.trim() !== '' && values.userpassword.trim() !== '') {
                setUserList([...userList, { text: values.username, password: values.userpassword }]);
                router.push('/login')
            }
            else {
                toast.error("Please enter data");
            }
        }
    })
    useEffect(() => {
        localStorage.setItem("userList", JSON.stringify(userList));
        console.log(userList,'ooo');
      }, [userList]);

    return (
        <>
            <ToastContainer />
            <div className="container-fluid containe-for-sub-box ">
                <div className="row">
                    <div className="col">
                        <div className="parent-form-div">
                            <div className="sub-form-data">
                                <div className="form-top-heading mt-2">SinUp</div>
                                <form className='mt-2' onSubmit={handleSubmit}>

                                    <div className="user-name-feild-div">
                                        <label htmlFor="" className='user-name-label-feild'> User Name </label>
                                        <input type="text" name='username'
                                            className='user-name-input mt-2'
                                            onChange={handleChange}
                                            value={values.username}
                                        />
                                    </div>
                                    <div className="user-password-feild mt-5">
                                        <label htmlFor="" className='user-password-label-feild'>User Password </label>
                                        <input type="password" name='userpassword'
                                            className='user-password-input mt-2'
                                            onChange={handleChange}
                                            value={values.userpassword} />
                                    </div>
                                    <br />
                                    <center>
                                        <button type='submit'
                                        className="btn text-white"
                                        style={{ backgroundColor: '#2c3e50' }}>
                                            Submit
                                        </button>
                                    </center>
                                    <br />
                                    <center className='p-2'>
                                        <Link href="/" className='text-dark'>
                                            already have account ? Register Now
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

export default Signup