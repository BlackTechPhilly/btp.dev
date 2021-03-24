export const validate = () => {};

export const sendMsg = (msg) => {
  return fetch(`https://blacktechphilly.herokuapp.com/sendMsg`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msg),
  });
};
