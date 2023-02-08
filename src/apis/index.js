import axios from "axios";
import { BASE_URL } from "../config";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getIssueList = async (page) => {
  try {
    const response = await instance.get(
      `/issues?sort=comments&state=open&direction=desc&per_page=10&page=${page}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
