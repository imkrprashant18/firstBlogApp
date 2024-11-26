import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/login");
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 text-white bg-blue-900 duration-200 hover:bg-blue-500 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
