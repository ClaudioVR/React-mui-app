import { Box } from "@mui/material";
import React from "react";
import Post from "./posts/Post";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";
import Post4 from "./posts/Post4";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post2 />
      <Post3 />
      <Post4 />
    </Box>
  );
};

export default Feed;
