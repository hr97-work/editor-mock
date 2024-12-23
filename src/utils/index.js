export const removeSpacesOutsideString = (code) => {
  let stringPlaceholders = [];

  code = code.replace(/'[^']*'|\"[^\"]*\"/g, (match) => {
    stringPlaceholders.push(match);
    return `__STRING_${stringPlaceholders.length - 1}__`;
  });

  code = code.replace(/\s+/g, '');

  return code.replace(/__STRING_(\d+)__/g, (match, index) => stringPlaceholders[index]);
}