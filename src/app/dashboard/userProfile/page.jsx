'use client'
import React, { useState } from 'react'
import './UserProfile.css'

const getLocalItem = () => {
  let userList = localStorage.getItem("userList");
  if (userList) {
    return JSON.parse(localStorage.getItem("userList"));
  } else {
    return [];
  }
};


const page = () => {
  const [userData, setUserData] = useState(getLocalItem())
  const randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  const randomNumber2 = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  const newUser = userData[userData.length - 1]
  return (
    <>
      <div className="header ">
        <div className="top-left-header">
          <div className="sub-pic">
            img
          </div>
          <div className="top-sub-header mt-2 mx-3">
            <div className="name">Emplooy Name : {newUser.username}</div>
            <div className="work">designation :  React JS developer</div>
            <div className="id">Emplooy ID : {randomNumber}</div>
          </div>
        </div>
        <div className="top-right-header">
          <div className="name">Emplooy password : {newUser.userpassword}</div>
          <div className="work">designation : React JS developer</div>
          <div className="id">Emplooy UID : {randomNumber2}</div>
        </div>
      </div>
    </>
  )
}

export default page