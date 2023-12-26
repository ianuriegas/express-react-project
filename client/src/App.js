import React, { useEffect, useState } from "react";

function App() {
  const [userData, setuserData] = useState([]);
  
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setuserData(data[0]);
        console.log(data[0]);
      });
  }, []);

  return (
    <div>
      {typeof userData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        userData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
