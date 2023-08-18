import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/Users";

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const handleAddUser = () => {
    const id = Math.random(100);
    dispatch(addUser({ id, name, userName }));
    setName("");
    setUserName("");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="addUser">
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="User name..."
        value={userName}
        onChange={onChangeUserName}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
