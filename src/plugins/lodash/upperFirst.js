const upperFirst = str => {
  if (str && str.length > 0) {
    let f = str[0].toUpperCase();
    let end = str.substr(1);
    end = end && end.length > 0 ? end : "";
    return [f, end].join("");
  }
};

export default upperFirst;
