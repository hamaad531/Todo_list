/**
 * Best practice is generally to divide data mapping in two components
 *  1. Logical component, where you fetch your data like this one
 *  2. UI Component where you just display your data like UserCard
 */
import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const DisplayUsers = () => {
  const usersList = useSelector((state) => state.UsersReducer.value);

  return (
    <div className="displayUsers">
      {usersList?.length < 1 ? (
        <h1>NO RECORD FOUND</h1>
      ) : (
        usersList.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  );
};

export default DisplayUsers;
