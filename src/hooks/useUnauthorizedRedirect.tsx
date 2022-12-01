import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthorized } from "./useIsAuthorized";

export function useUnauthorizedRedirect() {
  const isAuthorized = useIsAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/unauthorized", { replace: true });
    }
  }, [isAuthorized]);
}
