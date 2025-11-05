import React, { useEffect, useState } from "react";
import Header from "./Header";
import { login } from "../auth"
import { useDispatch } from "react-redux";
const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({
    type: "",
    msg: "",
  });
  const dispatch = useDispatch();
  function handleChange(key, value) {
    setUser((prev) => ({ ...prev, [key]: value }));
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    for(let field of Object.keys(user)){
      if(!user[field].trim()){
        setMessage({
          type: "error",
          msg: "Error : All the fields are mandatory"
        })
        return;
      }
    }
    if(user.password !== user.confirmPassword){
      setMessage({
        type: "error",
        msg: "Password not matched"
      });
      return;
    }
    const userData = {...user};
    delete userData.confirmPassword;
    const token = Math.random().toString(32).split(".")[1];
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setMessage({
      type: "success",
      msg: "Successfully Signed Up!"
    })
    setTimeout(()=> dispatch(login()), 1000)
  }

  return (
    <>
      <Header />
      <main>
        <h1 style={{fontWeight: "lighter"}}>Signup</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Full Name"
            value={user.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          />

          <button type="submit">Signup</button>
        </form>
        {message.type === "error" && (
          <p className="error">{message.msg}</p>
        )}
        {message.type === "success" && (
          <p className="success">{message.msg}</p>
        )}
      </main>
    </>
  );
};

export default Signup;
