import { Link } from "react-router-dom";

type Props = {};

export function UnauthorizedPage({}: Props) {
  return (
    <div>
      <p>Please login</p>
      <Link to="/login">Go to login page</Link>
    </div>
  );
}
