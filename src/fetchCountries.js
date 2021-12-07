
// //=================всплывающее окно работает, но 2 then ======================================//
// export function fetchCountries(name) {
//   const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(url)
//     .then(response => {
//     return response.json()
//     })
//       .then(data => {
//             if (data.status === 404) {
//             throw new Error(data.status)
//             } else {
//                 return data
//         }
//     })
// } 
// ===================== 2 вариант, всплывает окно об ошибке, но появляется вместо имени object==============================//



// Внешняя функция с именованным экспортом
// function fetchCountries(name) {
//   return  fetch(`https://restcountries.com/v3.1/name/${name}?fields=languages,flags,population,capital,name`)
//     .then(
//       (response) => 
//       {
//         if (!response.ok) {
//           throw new Error(response.status);
//         };
//         return response.json();        
//       });
// }


// // ---------------------------------------

// export {fetchCountries};

//===========================не работает нотификашка======================================/

//  export function fetchCountries(name) {
//   // const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
//       .then(data => {
//             if (data.status === 404) {
//             throw new Error(data.status)
//             } else {
//                 return data.json()
//         }
//     })
     
//   }


