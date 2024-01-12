import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import CommentCard from "./CommentCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "90%",
};

function CommentModal({ open, handleClose, replies, theme }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id={theme}
    >
      <Box
        // sx={style}
          className="comment-modal"
      >
        {replies.map((reply, index) => (
          <CommentCard key={index} reply={reply} theme={theme} />
        ))}
      </Box>
    </Modal>
  );
}

export default CommentModal;
