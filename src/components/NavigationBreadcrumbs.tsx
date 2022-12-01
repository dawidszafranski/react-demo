import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink, resolvePath, useLocation } from "react-router-dom";

type Props = {};

export function NavigationBreadcrumbs({}: Props) {
  const location = useLocation();

  const links = location.pathname
    .split("/")
    .filter((l) => l !== "")
    .map((href) => {
      const link = resolvePath(href);

      return (
        <NavLink to={link} key={link.pathname}>
          <Typography>{href}</Typography>
        </NavLink>
      );
    });

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="text.primary">App</Typography>
      {links}
    </Breadcrumbs>
  );
}
