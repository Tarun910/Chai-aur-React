import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="bg-gray-700 text to-black p-4 m -4">User : {userid} </h1>
    </div>
  );
}

export default User;
