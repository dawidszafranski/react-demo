import { RouterProvider } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { router } from "./routes/router";
import { userState } from "./states/userState";

type Props = {};

export function App({}: Props) {
  const user = useRecoilValue(userState);
  console.log(user);

  return <RouterProvider router={router} />;
}
