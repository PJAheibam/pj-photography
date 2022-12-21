import { axiosInstance } from "../api";

export function setJwtToken(user, callback = () => {}) {
  axiosInstance
    .post("/jwt", {
      uid: user?.uid,
      email: user?.email,
    })
    .then(({ data }) => {
      localStorage.setItem("access-token", data.token);
      callback();
    })
    .catch((error) => console.info(error));
}
