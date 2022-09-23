import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const generateUsers = () => {
  return [
    { name: "Michael", id: 1 },
    { name: "Allen", id: 2 },
    { name: "Kevin", id: 3 },
    { name: "Giannis", id: 4 },
    { name: "Scottie", id: 5 },
    { name: "Devin", id: 6 },
    { name: "Derrick", id: 7 },
    { name: "Kobe", id: 8 },
    { name: "Lebron", id: 9 },
    { name: "Zion", id: 10 },
  ];
};

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(generateUsers());
  }, []);

  const deleteUser = () => {
    setUsers((prevUsers) => {
      const randomUser = Math.floor(Math.random() * prevUsers.length);
      return prevUsers.filter((user, index) => index !== randomUser);
    });
  };
  useEffect(() => {
    document.title = users.length;
  }, [users]);
  return (
    <div className="App">
      {users.map((user) => {
        const { name, id } = user;
        return <div key={id}>{name}</div>;
      })}
      <button onClick={deleteUser}>DELETE</button>
    </div>
  );
}

export default App;
