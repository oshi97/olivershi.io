/**
 * 
 * @param {string} url 
 * @param {string} method 
 */
function ajax(url, method='GET') {
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
      console.log(xhttp)
      if (xhttp.readyState !== 4) 
        return;
      if (xhttp.status >= 200 && xhttp.status < 300)
        resolve(xhttp)
      else
        reject({
          status: xhttp.status,
          statusText: xhttp.statusText
        })
    }
    xhttp.open(method, url)
    xhttp.send()
  })
}

export function sheetsJson() {
  return ajax('/public/sheets/dir.json')
}