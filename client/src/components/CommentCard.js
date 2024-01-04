import { Card } from "@mui/material";
import React from "react";

function CommentCard({ theme, reply }) {
  const username = reply["username"];
  const dateAndTime = reply["date-and-time"];
  const textBody = reply["text-body"];
  return (
    // <Card style={{ padding: "10px", backgroundColor: "#BCC0C4" }}>
    //   {username}
    //   <br></br>

    //   {new Date(dateAndTime).toLocaleString()}
    //   <br></br>

    //   {textBody}
    // </Card>
    <div>
      {username}
      <br></br>

      {new Date(dateAndTime).toLocaleString()}
      <br></br>

      {textBody}
    </div>
  );
}

export default CommentCard;
