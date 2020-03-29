/**
 * 
 * @param {string} url 
 * @param {string} method 
 */
function _ajax(url) {
  if (!url || url === '') {
    return new Promise((_, reject) => {
      reject({
        status: 404,
        statusText: 'null or blank url'
      })
    })
  }
  let xhttp = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState !== 4) 
        return;
      if (xhttp.status >= 200 && xhttp.status < 300) {
        resolve(xhttp)
      }
      else
        reject(xhttp)
    }
    xhttp.open('GET', url)
    xhttp.send()
  })
}

export function fetchSheets() {
  return _ajax('api/sheets.json')
}

export function fetchJapanese(song_name) {
  return _ajax('api/japanese/' + song_name + '.json')
}