import React from "react";
import { Link } from "react-router-dom";

function Topics({ theme, topicsData }) {
  // Check if topicsData["topics"] is available
  const topics = topicsData && topicsData["topics"] ? Object.keys(topicsData["topics"]) : [];

  const truncateTopic = (topic) => {
    return topic.length > 64 ? topic.substring(0, 61) + "..." : topic;
  };

  const containerClassName = `category-container ${theme}-theme`;

  return (
    <div
      id={theme}
      style={{
        paddingTop: "70px",
        height: "100vh",
      }}
    >
      <body className="body-topics">
        <h2>Topics</h2>
        <div className={containerClassName}>
          {topics.map((topic) => (
            <div key={topic} className="category-box"> {/* Added key prop for better performance */}
              <Link to={`/topics/${topic}`}>{truncateTopic(topic)}</Link>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
}

export default Topics;
