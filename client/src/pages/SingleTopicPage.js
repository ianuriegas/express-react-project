import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

function SingleTopicPage({ theme, topicsData }) {
  const { topicName } = useParams();
  const posts =
    topicsData && topicsData["topics"] && topicsData["topics"][topicName]
      ? topicsData["topics"][topicName].Posts || []
      : [];

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
        {posts.length === 0 ? (
          <p>No posts yet.</p> // Display message if there are no posts
        ) : (
          posts.map((post, index) => <PostCard key={index} post={post} theme={theme} topicName={topicName}/>)
        )}
      </body>
    </div>
  );
}

export default SingleTopicPage;
