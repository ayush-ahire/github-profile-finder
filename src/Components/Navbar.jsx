import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar shadow-lg bg-transparent">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to={"/"} className="text-lg font-bold align-middle text-primary">
            GitHub Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-auto">
          <div className="flex justify-end">
            <Link
              to={'/'}
              className="btn  btn-primary btn-sm mx-2 text-xl rounded-lg "
            >
              HOME
            </Link>
            <Link
              to={"/About"}
              className="btn  btn-primary btn-sm text-xl mx-2 rounded-lg "
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
