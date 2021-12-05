 
export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

    return fetch(url)
    .then(response => {
    return response.json()
    })
      .then(data => {
            if (data.status === 404) {
            throw new Error(data.status)
            } else {
                return data
        }
    })
}
//  fetch('https://restcountries.com/v2/name?fields=name,capital,population,flags,languages')
// .then(response => {
//     return response.json();})
// .then(country => {
//     console.log(country)

