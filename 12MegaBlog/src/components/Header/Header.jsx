import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../../utils/utils";
import React from "react";
function Header() {
  const [showLogout, setShowLogout] = React.useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-900 w-full">
      <Container>
        <nav className="flex">
          <div className="mr-4 flex gap-2">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-indian-bride-illustration_23-2149418510.jpg?w=1380&t=st=1716061343~exp=1716061943~hmac=69910f95563f3b176ebe6f56057fa981c182ed43b8b12c9140787c0019fd5045"
              className="h-8"
              alt="Flowbite Logo"
            />
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto gap-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-500 text-gray-300 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {userData && (
              <div
                className="h-12 w-12 rounded-full bg-blue-700 flex justify-center items-center cursor-pointer relative"
                onClick={() => setShowLogout((prev) => !prev)} // Toggle logout button visibility
              >
                <li className="text-gray-100 text-lg">
                  {getInitials(userData?.name)}
                </li>
                {showLogout && (
                  <div
                    className="absolute top-14 right-0 bg-white shadow-lg rounded-lg p-2"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                  >
                    <LogoutBtn />
                  </div>
                )}
              </div>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
