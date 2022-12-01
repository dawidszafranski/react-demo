import { useRecoilState } from "recoil";
import { userState } from "../states/userState";

export function useUser() {
  const [state, setState] = useRecoilState(userState);
  function setUser(user: string) {
    setState({ isAuthorized: true, user });
  }

  return { user: state.user, setUser };
}
