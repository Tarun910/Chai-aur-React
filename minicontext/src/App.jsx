import { useState } from "react";

import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1 className="">lets understand the context</h1>
      </UserContextProvider>
    </>
  );
}

export default App;
