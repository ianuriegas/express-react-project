import React from "react";
import { Avatar, Box, Link, Modal, Stack, Typography } from "@mui/material";
import CommentCard from "./CommentCard";

function CommentModal({ open, handleClose, post, theme, topicName }) {
  const username = post["username"];
  const dateAndTime = post["date-and-time"];
  const textBody = post["text-body"];
  // const image = post["image"];
  const link = post["link"];
  const replies = post?.replies || [];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id={theme}
    >
      <Box className={"comment-modal"}>
        {/* modal-header */}
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "5px 5px 0px 0px",
            textAlign: "center",
            padding: "3%",
          }}
        >
          {topicName}
        </div>

        {/* modal-content */}
        <div style={{ padding: "18px" }}>
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
          <Stack spacing={2}>
            {replies.map((reply, index) => (
              <CommentCard key={index} reply={reply} theme={theme} />
            ))}
          </Stack>
        </div>
      </Box>
    </Modal>
  );
}

export default CommentModal;
