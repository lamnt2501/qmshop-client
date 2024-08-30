import { useEffect } from "react";

const useAuthRedirect = (token, status, navigate, page) => {
  useEffect(() => {
    if (token) navigate(page);
  }, [token, status, navigate]);
};

export default useAuthRedirect;
