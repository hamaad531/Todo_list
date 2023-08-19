import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, UpdateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const usersList = useSelector((state) => state.users.value);

  const handleAddUser = () => {
    const id = usersList[usersList.length - 1].id + 1;
    dispatch(addUser({ id, name, username }));
    setName("");
    setUsername("");
  };

  const handleUpdate = (userId) => {
    dispatch(UpdateUsername({ id: userId, username: newUsername }));
    setNewUsername("");
  };

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="User name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div className="displayUsers">
        {usersList.map((user) => (
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
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
