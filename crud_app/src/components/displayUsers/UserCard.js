import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { UpdateUsername, deleteUser } from "../../reducers/UsersReducer";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const [newUsername, setNewUsername] = useState("");

  const handleUpdate = (userId) => {
    dispatch(UpdateUsername({ id: userId, username: newUsername }));
    setNewUsername("");
  };

  const handledelete = (userId) => {
    dispatch(deleteUser({ id: userId }));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
      <input
        type="text"
        placeholder="New Name..."
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={() => handleUpdate(user.id)}>Update</button>
      <button onClick={() => handledelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
