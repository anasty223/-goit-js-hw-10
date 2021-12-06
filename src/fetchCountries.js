
//=================всплывающее окно работает, но 2 then ======================================//
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
// ===================== 2 вариант, но не работает всплывающее окно не пойму где ошибка==============================//


//  export function fetchCountries(name) {
//   // const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
//       .then(response =>{
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
     
//   }


