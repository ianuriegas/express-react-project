import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Link from "@mui/material/Link";
import CommentModal from "./CommentModal"; // Import the new component

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import "../styling/main.css";
import PostToolTip from "./PostToolTip";

function PostCard({ theme, post }) {
  const username = post["username"];
  const dateAndTime = post["date-and-time"];
  const textBody = post["text-body"];
  // const image = post["image"];
  const link = post["link"];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

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
        <Stack spacing={2}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ marginRight: 2 }}>A</Avatar>{" "}
            {/* Placeholder for avatar */}
            <Typography variant="h5">{username}</Typography>
          </Box>
          <Typography variant="body2">
            {new Date(dateAndTime).toLocaleString()}
          </Typography>
          <Typography variant="body2">{textBody}</Typography>
          {link && (
            <Typography variant="body2" color="text.secondary">
              <Link target="_blank" href={link}>
                {link}
              </Link>
            </Typography>
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          //   alignItems="center"
          //   justifyContent="center"
          style={{ marginTop: "10px" }}
        >
          {/* <Tooltip title="Like" className="tooltip"> */}
          {/* Like Button */}
          <PostToolTip
            title="Like"
            onClick={handleLike}
            ariaLabel="like"
            iconComponent={liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          />

          <PostToolTip
            title="Dislike"
            onClick={handleDislike}
            ariaLabel="dislike"
            iconComponent={
              disliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />
            }
          />

          <PostToolTip
            title="Comments"
            onClick={handleOpen}
            ariaLabel="comment"
            iconComponent={<ChatBubbleOutlineIcon />}
          />

          <CommentModal
            open={open}
            handleClose={handleClose}
            post={post}
            theme={theme}
          />
        </Stack>
      </CardContent>
      {/* {image && <CardMedia component="img" src={image} alt={username} />} */}
    </Card>
  );
}

export default PostCard;
