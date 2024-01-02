import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

function PostCard() {
  return (
    <Card sx={{ maxWidth: "80%" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textDecoration: "underline" }}
        >
          User
        </Typography>
        <Typography variant="body2" color="text.secondary">
          5 minutes ago
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        width="40%"
        src="https://d2zp5xs5cp8zlg.cloudfront.net/image-77686-800.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link
            href="https://www.google.com/"
            // style={{ textDecoration: "none", color: "inherit" }}
          >
            https://www.google.com/
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
