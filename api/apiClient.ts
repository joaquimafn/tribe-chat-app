import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://dummy-chat-server.tribechat.pro/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;
