import React, { useEffect } from "react";
import { useState } from "react";
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/tarun910")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="bg-gray-700 m-4 p-4 text-white text-4xl bg-center justify-center m-auto items-center ">
        Github Folowers : {data.followers}
        <img
          alt="profile picture"
          width={300}
          src={data.avatar_url}
          Git
          picture
        ></img>
      </h1>
    </div>
  );
}

export default Github;

//Loader concept -- important
