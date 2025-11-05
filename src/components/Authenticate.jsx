import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Authenticate = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user || !user?.isLoggedIn) navigate("/signup");
    else navigate("/profile");
  }, [user, navigate]);
  return children;
};

export default Authenticate;
