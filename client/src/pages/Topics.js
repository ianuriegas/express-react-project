import React from "react";

function Topics() {
  const topics = ["Art", "Music", "Movies", "Memes", "Sports", "Technology"];
  return (
    // <body class="body-topics">
    <div style={{ backgroundColor: "orange" }}>
      <body class="body-topics">
        <h2>Categories</h2>
        <div class="category-container">
          {topics.map((topic) => (
            <div class="category-box">
              <a href="/">{topic}</a>
            </div>
          ))}
        </div>
      </body>
    </div>
    // </body>
  );
}

export default Topics;
