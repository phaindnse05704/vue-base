export default inputText => {
  let replacedText,
    // replacePattern1,
    replacePattern2,
    replacePattern3,
    replacePattern4;

  //URLs starting with http://, https://, or ftp://
  //   replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  //   replacedText = inputText.replace(
  //     replacePattern1,
  //     '<a href="$1" target="_blank">$1</a>'
  //   );
  replacedText = inputText;

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  // eslint-disable-next-line no-useless-escape
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    '$1<a href="http://$2" target="_blank">$2</a>'
  );

  //Change email addresses to mailto:: links.
  // eslint-disable-next-line no-useless-escape
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  // eslint-disable-next-line no-useless-escape
  replacePattern4 = /(<a\shref=")?(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)(">)?(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)(<\/a>)?/gim;
  let email = replacedText.match(replacePattern3);
  if (email && email.length) {
    replacedText = replacedText.replace(replacePattern4, email[0]);
  }
  replacedText = replacedText.replace(
    replacePattern3,
    '<a href="mailto:$1">$1</a>'
  );

  return replacedText;
};

export const linkifyAll = inputText => {
  let replacedText,
    replacePattern1,
    replacePattern2,
    replacePattern3,
    replacePattern4;

  //URLs starting with http://, https://, or ftp://
  // eslint-disable-next-line no-useless-escape
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(
    replacePattern1,
    '<a href="$1" target="_blank">$1</a>'
  );
  // replacedText = inputText;

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  // eslint-disable-next-line no-useless-escape
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    '$1<a href="http://$2" target="_blank">$2</a>'
  );

  //Change email addresses to mailto:: links.
  // eslint-disable-next-line no-useless-escape
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  // eslint-disable-next-line no-useless-escape
  replacePattern4 = /(<a\shref=")?(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)(">)?(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)(<\/a>)?/gim;
  let email = replacedText.match(replacePattern3);
  if (email && email.length) {
    replacedText = replacedText.replace(replacePattern4, email[0]);
  }
  replacedText = replacedText.replace(
    replacePattern3,
    '<a href="mailto:$1">$1</a>'
  );

  return replacedText;
};
