import React, { useContext } from "react";
import { UserContext } from "./User";

export default function Profile() {
  const { firstName, address, age } = useContext(UserContext);

  return (
    <div>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
      </ul>
      <ul>
        <li>NATION: {address.nation}</li>
        <li>STREET: {address.city.street}</li>
        <li>HOUSE: {address.city.house}</li>
      </ul>
    </div>
  );
}

// export default function Profile() {
//     const value = useContext(UserContext)
//     console.log(value)

//     return (
//       <ul>
//         <li>First Name: {value.firstName}</li>
//         <li>Age: {value.age}</li>
//         <li>Nation: {value.address.nation}</li>
//         <li>Street: {value.address.city.street}</li>
//         <li>House: {value.address.city.house}</li>
//       </ul>
//     )
//   }
