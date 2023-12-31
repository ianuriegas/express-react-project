import React, { useEffect, useState } from "react";

function Users({theme}) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  return (
    <div
      id={theme}
      style={{
        paddingTop: "70px",
        height: "100vh"
      }}
    >
      <body
        class="body-topics"
        style={{
          // backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        <h2>Users</h2>

      {userData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {userData.map((user, i) => (
            <p key={i}>{user.username}</p>
          ))}
        </div>
      )}
      </body>
    </div>
  );
}

export default Users;
