import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../Context/Github/GithubContext";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const [text, settext] = useState("");
  const handleChange = (event) => {
    settext(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("PLEASE ENTER SOMETHING");
    } else {
      searchUsers(text);
      settext("");
    }
  };
  return (
    <div className="grid grid-cols-1 xd:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-40 input input-lg bg-gray-100 text-black"
                onChange={handleChange}
                value={text}
              />
              <button className="absolute btn-primary top-0 right-0 rounded-l-none w-36 btn btn-lg">
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-lg btn-ghost">
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
