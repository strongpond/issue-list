import axios from "axios";
import { BASE_URL } from "../config";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_GIT_ACCESS_TOKEN}`,
  },
});

export const getIssueList = async () => {
  try {
    const response = await instance.get("/issues");
    return response;
  } catch (error) {
    return error;
  }
};
