import "./App.css";

import AddUser from "./components/addUser/AddUser";
import DisplayUsers from "./components/displayUsers/DisplayUsers";

function App() {
  return (
    <div className="App">
      <AddUser />
      <hr />
      <DisplayUsers />
    </div>
  );
}

export default App;
