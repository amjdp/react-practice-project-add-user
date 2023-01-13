import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';


function App() {
  // array destructuring
  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(uName, uAge) => {
    setUsersList((prevUsersList) => {
      // use spread operator - push all elements out of that array and 
      // add them as new elements to this new array
      // add a new element at the end - Javascript object
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });    
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
