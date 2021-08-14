import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend-v1-alpha.herokuapp.com/",
});

export default instance;
