import "./App.css";
import AddUser from "../components/Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  return (
    <div className="App">
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
