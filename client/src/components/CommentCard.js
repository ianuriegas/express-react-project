import React from "react";
import { Card, Stack, Typography, Avatar, Box } from "@mui/material";

function CommentCard({ theme, reply }) {
  const username = reply["username"];
  const dateAndTime = reply["date-and-time"];
  const textBody = reply["text-body"];

  return (
    <Card sx={{ padding: 2, backgroundColor: "#BCC0C4", boxShadow: 1 }}>
      <Stack spacing={2}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ marginRight: 2 }}>A</Avatar> {/* Placeholder for avatar */}
          <Typography variant="subtitle1" color="textPrimary">
            {username}
          </Typography>
        </Box>

        <Typography variant="body2" color="textSecondary">
          {new Date(dateAndTime).toLocaleDateString()} at {new Date(dateAndTime).toLocaleTimeString()}
        </Typography>

        <Typography variant="body1" color="textPrimary">
          {textBody}
        </Typography>
      </Stack>
    </Card>
  );
}

export default CommentCard;
