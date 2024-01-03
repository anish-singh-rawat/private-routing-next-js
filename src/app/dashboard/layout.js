import React from 'react'
import UserDashBoard from '../component/dashboard'

const layout = ({children}) => {
  return (
    <div style={{backgroundColor : '#57606f', color : 'white'}}>
        <UserDashBoard  pages={children}/>
        </div>
  )
}

export default layout