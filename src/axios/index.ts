import axios from "axios";

// - - - axios interceptor request - - - - - - - - - - - - - - -
axios.interceptors.request.use(
  (request) => {
    const accessToken =
      typeof window !== "undefined"
        ? `Bearer ${window.localStorage.getItem("token")}`
        : null;

    request.headers["Authorization"] = accessToken;
    request.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// - - -  axios interceptor response - - - - - - - - - - - - - - -
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        localStorage.clear();
        document.location.href = "/";
        // window.location.reload();
        break;
      case 400:
        // toast.error(error.response.data.message);
        break;
      default:
        break;
      // toast.error('Something really went wrong, please try again');
    }
    return Promise.reject(error);
  }
);
