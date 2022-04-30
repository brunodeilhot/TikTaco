import axios from "axios";
import { feedRecipes } from "./recipes"

export const baseURL = "http://localhost:8000";

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const services = {
  feedRecipes
};

export default services;