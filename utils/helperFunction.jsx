export const validation = (name, value, findNumber = true) => {
  const regExp = findNumber ? /\d/g : /\D/g;

  return name[0] === name[1] ? value.replace(regExp, '') : value;
};

export const find = (data, id) => {
  let res = {};

  data.forEach((elem, i) => {
    if (elem.id === id) {
      res = { index: i, user: data[i] };
    }
  });

  return res;
};
