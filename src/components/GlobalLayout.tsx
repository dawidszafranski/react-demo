import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";
import { NavigationBreadcrumbs } from "./NavigationBreadcrumbs";

type Props = {};

export function GlobalLayout({}: Props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <NavLink to="/">React demo app</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={2}>
          <NavigationBreadcrumbs />
        </Box>
        <Box mt={2}>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
}
