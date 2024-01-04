import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import CommentCard from "./CommentCard";

function PostCard({ theme, post }) {
  const username = post["username"];
  const dateAndTime = post["date-and-time"];
  const textBody = post["text-body"];
  // const image = post["image"];
  const link = post["link"];
  const replies = post?.replies || [];
  return (
    <Card
      id={theme}
      className="postcard"
      sx={{
        width: "45%",
        marginBottom: "20px",
        color: "white" /* DARK */,
        padding: "10px",
      }}
      
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        <Typography variant="body2">
          {new Date(dateAndTime).toLocaleString()}
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
        {replies.length > 0 && (
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Replies
          </Typography>
        )}
        {replies.map((reply, index) => (
          <Card
            id={theme}
            className="commentcard"
            style={{
              padding: "10px",
            }}
          >
            <CommentCard key={index} reply={reply} theme={theme} />
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

export default PostCard;
