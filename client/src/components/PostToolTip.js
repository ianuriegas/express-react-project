import React from "react";
import { IconButton, Tooltip } from "@mui/material";

const PostToolTip = ({
  title,
  children,
  onClick,
  ariaLabel,
  iconComponent,
}) => {
  return (
    <Tooltip
      title={title}
      className="post-tooltip"
      PopperProps={{
        popperOptions: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10], // [horizontal, vertical] adjustment
              },
            },
          ],
        },
      }}
    >
      <IconButton
        aria-label={ariaLabel}
        style={{ color: "white" }}
        onClick={onClick}
      >
        {iconComponent}
      </IconButton>
    </Tooltip>
  );
};

export default PostToolTip;
