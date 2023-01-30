import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json ",
  },
});

export const send_Otp = (data) => api.post("/api/v1/send-otp", data);
export const VerifyOtp = (data) => api.post("/api/v1/verify-otp", data);
export const activated = (data) => api.post("/api/v1/activate", data);
export const logout = () => api.post("/api/v1/logout");

// Interceptor

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
         await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/refresh`,
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest)
      } catch (error) {
        console.log(error.message);
      }
      throw error;
    }
  }
);

export default api;
