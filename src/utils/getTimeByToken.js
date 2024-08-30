import { jwtDecode } from "jwt-decode";

export function getTimeByToken(token) {
  const deCode = jwtDecode(token);
  if (deCode && deCode.exp && deCode.iat) {
    return (deCode.exp - deCode.iat) / (24 * 60 * 60);
  } else {
    return 3600 / (24 * 60 * 60);
  }
}
