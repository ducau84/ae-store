export const getData = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(JSON.stringify(data));
    }, 2000);
  });
};
