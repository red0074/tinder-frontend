import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-i09o.onrender.com",
});

export default instance;
