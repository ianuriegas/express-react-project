import React from "react";

function Topics({ theme }) {
  // Accepting theme as a prop
  const topics = [
    "Art",
    "Books",
    "Cooking",
    "Fashion",
    "Gaming",
    "Memes",
    "Movies",
    "Music",
    "Science",
    "Sports",
    "Travel",
    "Technology",
  ];

  // Optionally, you can define classNames based on the theme
  const containerClassName = `category-container ${theme}-theme`;

  return (
    <div id={theme} style={{ paddingTop: "70px" }}>
      {" "}
      {/* Using theme for id */}
      <body class="body-topics">
        <h2>Topics</h2>
        <div className={containerClassName}>
          {" "}
          {/* Using the conditional className */}
          {topics.map((topic) => (
            <div class="category-box">
              <a href="/">{topic}</a>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
}

export default Topics;
