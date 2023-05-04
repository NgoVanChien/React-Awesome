// import React from "react";
import Profile from "./Profile";
import { useContext } from "react";
import { UserContext } from "./User";

export default function UserProfile() {
  const { increaseAge } = useContext(UserContext);

  return (
    <div>
      <Profile />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
