import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Authenticate = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useMemo(() => JSON.parse(localStorage.getItem("user")), []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn || !user) navigate("/signup");
    else navigate("/profile");
  }, [isLoggedIn, navigate]);
  return children;
};

export default Authenticate;
