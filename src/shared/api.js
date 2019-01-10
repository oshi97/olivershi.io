import fetch from 'isomorphic-fetch'

export function fetchPopularRepos () {
    const language = 'all'
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return fetch(encodedURI)
    .then((data) => {
        return data.json()
    })
    .then((repos) => {
        return repos.items
    })
    .catch((error) => {
      console.warn("api error > ", error)
      return null
    });
}