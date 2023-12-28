import React, { useEffect, useState } from "react";

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  return (
    <div>
      {userData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {userData.map((user, i) => (
            <p key={i}>{user.username}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
