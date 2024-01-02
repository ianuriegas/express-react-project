import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import CommentCard from "./CommentCard";

function PostCard({ post }) {
  const username = post["username"];
  const dateAndTime = post["date-and-time"];
  const textBody = post["text-body"];
  //   const image = post["image"];
  const link = post["link"];
  const replies = post?.replies || [];
  return (
    <Card
      sx={{
        width: "45%",
        backgroundColor: "#3A3B3C",
        marginBottom: "20px",
        color: "white",
        padding: "10px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        <Typography variant="body2">
          {new Date(dateAndTime).toLocaleString()}
          {/* {post["date-and-time"]} */}
        </Typography>
      </CardContent>
      {/* {image && <CardMedia component="img" src={image} alt={username} />} */}
      <CardContent>
        <Typography variant="body2">{textBody}</Typography>
        {link && (
          <Typography variant="body2" color="text.secondary">
            <Link href={link}>{link}</Link>
          </Typography>
        )}
        {/* {replies[0]["text-body"]} */}
        {replies.map((reply, index) => (
          <CommentCard key={index} reply={reply} />
        ))}
      </CardContent>
    </Card>
  );
}

export default PostCard;
