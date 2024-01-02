import React from "react";
import { Link } from "react-router-dom";

function Topics({ theme, topicsData }) {
  const topics = Object.keys(topicsData["topics"]);

  const truncateTopic = (topic) => {
    return topic.length > 64 ? topic.substring(0, 61) + "..." : topic;
  };

  const containerClassName = `category-container ${theme}-theme`;

  return (
    <div id={theme} style={{ paddingTop: "70px" }}>
      <body class="body-topics">
        <h2>Topics</h2>
        <div className={containerClassName}>
          {topics.map((topic) => (
            <div class="category-box">
              <Link to={`/topics/${topic}`}>{truncateTopic(topic)}</Link>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
}

export default Topics;
