import React, { useEffect } from 'react'
import Header from './Header'
import { logout } from "../auth"
import { useDispatch } from 'react-redux'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  if(!user) return <></>
  return (
    <>
      <Header/>
      <section className='profile'>
        <p>Profile</p>
        <p>Full Name : {user.fullName}</p>
        <p>Email : {user.email}</p>
        <p>Password : {user.password}</p>

        <button onClick={() => dispatch(logout())}>Logout</button>
      </section>
    </>
  )
}

export default Profile