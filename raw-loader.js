// I wanted to make something cool but honestly raw loader works great
module.exports = function rawLoader(source) {
  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${json};`;
}