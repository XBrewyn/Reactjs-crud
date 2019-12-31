export const validation = (name, value, findNumber = true) => {
  const regExp = findNumber ? /\d/g : /\D/g;

  return name[0] === name[1] ? value.replace(regExp, '') : value;
};
