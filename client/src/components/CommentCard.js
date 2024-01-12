import React from "react";
import { Card, Stack, Typography, Avatar, Box } from "@mui/material";

function CommentCard({ theme, reply }) {
  const username = reply["username"];
  const dateAndTime = reply["date-and-time"];
  const textBody = reply["text-body"];

  return (
    <Card
      id={theme}
      className="comment-modal-card"
      sx={{
        padding: 2,
        backgroundColor: "#BCC0C4",
        boxShadow: 1,
        color: "white",
      }}
    >
      <Stack spacing={2}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ marginRight: 2 }}>A</Avatar>{" "}
          {/* Placeholder for avatar */}
          <Typography variant="subtitle1">{username}</Typography>
        </Box>

        <Typography variant="body2">
          {new Date(dateAndTime).toLocaleDateString()} at{" "}
          {new Date(dateAndTime).toLocaleTimeString()}
        </Typography>

        <Typography variant="body1">{textBody}</Typography>
      </Stack>
    </Card>
  );
}

export default CommentCard;
