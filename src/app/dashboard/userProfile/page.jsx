import React from 'react'
import './UserProfile.css'

const page = () => {
  return (
    <>
      <div className="header ">
        <div className="top-left-header">
          <div className="sub-pic">
            img
          </div>
          <div className="top-sub-header mt-2 mx-3">
            <div className="name">Anish Singh Rawat</div>
            <div className="work">React JS developer</div>
            <div className="id">Emplooy ID : 712</div>
          </div>
        </div>
        <div className="top-right-header">
          <div className="name">Anish Singh Rawat</div>
          <div className="work">React JS developer</div>
          <div className="id">Emplooy ID : 712</div>
        </div>
      </div>
    </>
  )
}

export default page