import React from "react";
//import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="card side compact bg-base-100 shadow-md">
      <div className=" flex-row space-x-4  items-center card-body">
        <div>
          <div className="avatar">
            <div className="w-14 h-14 rounded-full">
              <img src={user.avatar_url} alt="Avatar" />
            </div>
          </div>
        </div>
        <div>
        <h2 className="card-title">{user.login}</h2>
        <a href={user.html_url} target='_blank' rel="noreferrer"  className="text-base-content text-end" >
          View Profile
        </a></div>
      </div>
    </div>
  );
}

export default UserItem;
