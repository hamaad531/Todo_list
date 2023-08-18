import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const DisplayUsers = () => {
  const usersList = useSelector((state) => state.UsersReducer.value);

  return (
    <div className="displayUsers">
      {usersList.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default DisplayUsers;
