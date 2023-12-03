import axios from "axios";
import { useSelector } from "react-redux";
import { userLocalStorage } from "./localServices";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjIxLzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDk3OTIwMDAwMCIsIm5iZiI6MTY4NzE5NDAwMCwiZXhwIjoxNzExMTI2ODAwfQ.I9iDnvUJNQaG_RBPSODU3vvlNF0JJ7lRamr221wclIQ";

// export const AUTHOR = () => {
//   let info = userLocalStorage.get;
//   if (info != null) {
//     let result = "Bearer" + info.accessToken;
//     console.log(result);
//     return result;
//   }
// };

export const configHeader = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    // Authorization: AUTHOR,
  },
});
