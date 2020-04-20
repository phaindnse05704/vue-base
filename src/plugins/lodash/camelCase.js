const camelCase = str => {
  return str.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
};

export default camelCase;
