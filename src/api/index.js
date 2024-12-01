import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://hip-hosting-backend.vercel.app",
});

export default mainURL;
