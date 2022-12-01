import { Box, Button, Paper, Typography } from "@mui/material";
import { NavLink, useLoaderData } from "react-router-dom";
import { Post } from "../api/posts";

type Props = {};

export function ListPage({}: Props) {
  const data = useLoaderData() as Post[];
  const posts = data || [];

  return (
    <div>
      <Box display="flex" justifyContent="center" width="100%">
        <NavLink to="/articles/create">
          <Button>Create new post +</Button>
        </NavLink>
      </Box>
      {posts.map((p) => (
        <Box key={p.id} mt={2}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">{p.title}</Typography>
              <Typography>{p.body}</Typography>
            </Box>
          </Paper>
        </Box>
      ))}
    </div>
  );
}
