 
export function fetchCountries(name) {
    const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
    return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}

//  fetch('https://restcountries.com/v2/name?fields=name,capital,population,flags,languages')
// .then(response => {
//     return response.json();})
// .then(country => {
//     console.log(country)

