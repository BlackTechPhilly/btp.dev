// Local;
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

// Heroku
// export const sendMsg = (msg) => {
//   return fetch(`https://iankimbleportfolio.herokuapp.com/sendMsg`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(msg),
//   });
// };
