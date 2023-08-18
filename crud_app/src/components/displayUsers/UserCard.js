import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { UpdateUsername, deleteUser } from "../../features/Users";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");

  const handleUpdate = (userId) => {
    dispatch(UpdateUsername({ id: userId, username: newUsername }));
    setNewUsername("");
  };

  return (
    <div key={user.id}>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
      <input
        type="text"
        placeholder="New Name..."
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={() => handleUpdate(user.id)}>Update</button>
      <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
        Delete
      </button>
    </div>
  );
};

export default UserCard;
