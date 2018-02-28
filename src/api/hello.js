/* eslint-disable */
export default {
  getWorld() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(`world${Math.floor(Math.random() * 10000)}`), 1000),
    );
  },
};
