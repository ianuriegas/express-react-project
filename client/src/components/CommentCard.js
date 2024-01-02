import { Card } from "@mui/material";
import React from "react";

function CommentCard({ reply }) {
  const username = reply["username"];
  const dateAndTime = reply["date-and-time"];
  const textBody = reply["text-body"];
  return (
    <Card style={{ padding: "10px", backgroundColor: "#BCC0C4" }}>
      {username}
      <br></br>

      {dateAndTime}
      <br></br>

      {textBody}
    </Card>
  );
}

export default CommentCard;
