export function setJwtToken(user, logout, callback = () => {}) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 401 || res.status === 403) logout();

      return res.json();
    })
    .then((data) => {
      console.info(data);
      localStorage.setItem("access-token", data.token);
      callback();
    })
    .catch((err) => console.error(err));
}
