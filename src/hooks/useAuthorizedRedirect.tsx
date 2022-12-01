import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthorized } from "./useIsAuthorized";

export function useAuthorizedRedirect() {
  const isAuthorized = useIsAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/articles", { replace: true });
    }
  }, [isAuthorized]);
}
