// Split the outputting and fetching logic into two different components
// UserList component - responsible for outputting user data

import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {/*  prop property named users - hold an array of user data*/}
      {/* map method -to map the array of users to an array of JSX elements */}
      {/* So to transform our user data to JSX elements which then are rendered onto the DOM */}
      {/* map executes a funtion on every item in the user's array & will get that item as input */}
      {/* user - single item & write an arrow function */}
      {/* fn returns a JSX element(list-item <li></li>) for every user of that user's array we expect to get on this prop */}

      {/* users is an array of user objects where every object has a name property & an age property */}
     

      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
