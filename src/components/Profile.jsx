import React, { useEffect } from 'react'
import Header from './Header'
import { logout } from "../auth"
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  if(!user || !user?.isLoggedIn) return <></>;
  
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