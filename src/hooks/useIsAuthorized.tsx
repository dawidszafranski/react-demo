import { useRecoilValue } from "recoil";
import { userState } from "../states/userState";

export function useIsAuthorized() {
  const { isAuthorized } = useRecoilValue(userState);

  return isAuthorized;
}
