import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

// Search db for the `topicName`


function TopicPage({ theme }) {
  const { topicName } = useParams();

  return (
    <div
      id={theme}
      style={{
        paddingTop: "70px",
      }}
    >
      <body
        class="body-topics"
        style={{
          // backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        <h2>{topicName} Posts</h2>
        <PostCard></PostCard>
        {/* <PostCard></PostCard> */}
      </body>
    </div>
  );
}

export default TopicPage;
