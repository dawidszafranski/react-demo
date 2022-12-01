import { Outlet } from "react-router-dom";
import { useUnauthorizedRedirect } from "../hooks/useUnauthorizedRedirect";

type Props = {};

export default function AuthorizedPage({}: Props): JSX.Element {
  useUnauthorizedRedirect();

  return (
    <div>
      <Outlet />
    </div>
  );
}
