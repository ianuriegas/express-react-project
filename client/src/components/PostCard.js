import { Card, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import CommentCard from "./CommentCard";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
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
        </Typography>
        <Typography variant="body2">{textBody}</Typography>
        {link && (
          <Typography variant="body2" color="text.secondary">
            <Link href={link}>{link}</Link>
          </Typography>
        )}
        <Stack
          direction="row"
          spacing={2}
        //   alignItems="center"
        //   justifyContent="center"
        style={{marginTop: "10px"}}
        >
          <IconButton aria-label="like" style={{color: "white"}}>
            <ThumbUpOffAltIcon />
          </IconButton>
          <IconButton aria-label="dislike" style={{color: "white"}}>
            <ThumbDownOffAltIcon />
          </IconButton>
          <IconButton aria-label="comment" style={{color: "white"}}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Stack>
        {/* {replies.length > 0 && (
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Replies
          </Typography>
        )} */}
        {/* <Card
          id={theme}
          className="commentcard"
          style={{
            padding: "10px",
          }}
        >
          {replies.map((reply, index) => (
            <CommentCard key={index} reply={reply} theme={theme} />
          ))}
        </Card> */}
      </CardContent>
      {/* {image && <CardMedia component="img" src={image} alt={username} />} */}
    </Card>
  );
}

export default PostCard;
