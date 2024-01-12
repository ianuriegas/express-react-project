import React from "react";
import { Box, Modal, Stack } from "@mui/material";
import CommentCard from "./CommentCard";

function CommentModal({ open, handleClose, post, theme }) {
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
      <Box className="comment-modal">
        <Stack spacing={2}>
          {replies.map((reply, index) => (
            <CommentCard key={index} reply={reply} theme={theme} />
          ))}
        </Stack>
      </Box>
    </Modal>
  );
}

export default CommentModal;
