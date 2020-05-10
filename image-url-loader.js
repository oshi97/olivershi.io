// Probably don't need this after realizing I was adding an extra period
// in my list of extensions somewhere (as I guessed... but couldn't find...)
// adding to source control for now for when I forget how this stuff works
module.exports = function () {
  // e.g. /Users/oshi/olivershi.io/docs/public/images/1.jpg
  const resourcePath = this.resourcePath
  const i = resourcePath.indexOf('public/images/');
  return `module.exports = ${ JSON.stringify({
    url: resourcePath.substring(i)
  }) }`;
}