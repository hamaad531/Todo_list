import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const DisplayUsers = () => {
  const usersList = useSelector((state) => state.users.value);

  return (
    <div className="displayUsers">
      {usersList.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default DisplayUsers;
