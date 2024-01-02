import React from "react";
import { useParams } from "react-router-dom";

function TopicPage({ theme }) {
  const { topicName } = useParams();

  return (
    <div
      id={theme}
      style={{
        paddingTop: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <body
        class="body-individual-topic"
        style={{
          // backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        <h2>{topicName}</h2>
      </body>
    </div>
  );
}

export default TopicPage;
