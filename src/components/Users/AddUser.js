import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); // initial value undefined

  const addUserHandler = (event) => {
    event.preventDefault();

    // For validation make sure that all this code here only executes if we have valid inputs
    // If neither the name nor the age is empty & the age is also smaller than one

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Inavlid input",
        message: "Please enter a valid name and age (non-empty values)"
      });
      return;
    }
    if (+enteredAge < 1) {
      // add + to ensure the enteredAge is a number
      setError({
        title: "Inavlid age",
        message: "Please enter a valid age ( > 0)"
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error &&
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
