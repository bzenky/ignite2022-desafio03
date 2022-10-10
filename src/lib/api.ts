import axios from "axios";

export const ghUserAPI = axios.create({
  baseURL: 'https://api.github.com/users'
})

export const ghRepoAPI = axios.create({
  baseURL: 'https://api.github.com/repos'
})