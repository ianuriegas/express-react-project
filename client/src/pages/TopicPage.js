import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

function TopicPage({ theme, topicsData }) {
  const { topicName } = useParams();
  const posts = topicsData["topics"][topicName]?.Posts || [];

  return (
    <div
      id={theme}
      style={{
        paddingTop: "70px",
        height: "100vh",
      }}
    >
      <body class="body-topics">
        <h2>{topicName}</h2>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </body>
    </div>
  );
}

export default TopicPage;
