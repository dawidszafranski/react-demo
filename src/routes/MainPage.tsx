import { Link } from "react-router-dom";
import { useIsAuthorized } from "../hooks/useIsAuthorized";

type Props = {};

export function MainPage({}: Props) {
  const isAuthorized = useIsAuthorized();

  return (
    <div>
      {isAuthorized ? (
        <Link to="/auth/list">Go to Articles</Link>
      ) : (
        <Link to="/login">Go to login page</Link>
      )}
    </div>
  );
}
