import React from "react";
import UserContext from "./UseContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContextProvider value={{ user, setUser }}>
      {children}
    </UserContextProvider>
  );
};

export default UserContextProvider;
