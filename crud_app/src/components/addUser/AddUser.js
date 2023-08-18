import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../reducers/UsersReducer";

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);

  const [formError, setFormError] = useState(false);

  const handleAddUser = () => {
    // Validate form
    if (userName.length === 0 || name.length === 0) {
      setFormError(true);
    } else {
      setFormError(false);

      const id = Math.random(100);
      dispatch(addUser({ id, name, userName }));

      setName("");
      setUserName("");
    }
  };

  // Why these functions when we can write it in onClick function?
  // Because in future we need to add validations like below
  const onChangeName = (e) => {
    const val = e.target.value;
    if (val.length > 10) {
      setNameError(true);
    } else {
      setNameError(false);
      setName(val);
    }
  };

  const onChangeUserName = (e) => {
    const val = e.target.value;
    if (val.length > 10) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
      setUserName(val);
    }
  };

  return (
    <div className="addUser">
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={onChangeName}
      />
      {nameError && <span>Please Enter a valid name</span>}

      <br />
      <br />

      <input
        type="text"
        placeholder="User name..."
        value={userName}
        onChange={onChangeUserName}
      />
      {userNameError && <span>Please Enter a valid userName</span>}

      <br />
      <br />

      <button onClick={handleAddUser}>Add User</button>
      {formError && <span>All fields are required</span>}
    </div>
  );
};

export default AddUser;
