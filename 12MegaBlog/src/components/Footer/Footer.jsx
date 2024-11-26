import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-indian-bride-illustration_23-2149418510.jpg?w=1380&t=st=1716061343~exp=1716061943~hmac=69910f95563f3b176ebe6f56057fa981c182ed43b8b12c9140787c0019fd5045"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mithila Xplains
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 MithilaXplains™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
