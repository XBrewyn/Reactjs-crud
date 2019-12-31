exports.find = (data, id) => {
  let res = {};

  data.forEach((elem, i) => {
    if (elem.id === id) {
      res = { index: i, user: data[i] };
    }
  });

  return res;
};
