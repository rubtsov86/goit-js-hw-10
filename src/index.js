import './css/styles.css';
import debounce from "lodash.debounce";
import fetchCountries from "./fetchCountries";


const DEBOUNCE_DELAY = 300;
// const BASE_URL = "https://restcountries.com/v3.1/name/"


const inputRef = document.querySelector('#search-box');
// const countriesListRef = document.querySelector('.country-list');
// const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));


// function fetchCountries(name) {
//     const inputValue = inputRef.value;

//     if (inputValue === '') {
//         return
//     }

//     const countriesList = fetch(`${BASE_URL}${inputValue}?fields=name,name.official,capital,population,flags,languages`)
//         .then(r => {
//             if (!r.ok) {
//                 Notiflix.Notify.failure("Oops, there is no country with that name");
//                 throw new Error(r.status);
//         }
//             return r.json()
//         })
//         .catch(error => console.log('error'));
    

//     return countriesList.then(onSuccses).catch(onError);
// }

// function onSuccses(data) {
//     countriesListRef.innerHTML = '';
//     countryInfoRef.innerHTML ='';

//     if (data.length > 10) {
        
//         return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     }
    
//     else if (data.length === 1) {
        
//         const cardMarkup = `
//             <img src="${data[0].flags.svg}" alt="" class="country-icon" width="40">
//             <p class="title">${data[0].name.common}</p>
//             <ul class="country-description">
//                 <li class="country-description__item"><span class="country-description__text">Capital:</span>${data[0].capital}</li>
//                 <li class="country-description__item"><span class="country-description__text">Population:</span>${data[0].population}</li>
//                 <li class="country-description__item"><span class="country-description__text">Languages:</span>${Object.values(data[0].languages).join(', ')}</li>
//             </ul>
//         `
//         console.log(cardMarkup);
//         countryInfoRef.insertAdjacentHTML("beforeend", cardMarkup)
//     }
        
//     else if (data.length > 1) {
        
//         const listMarkup = data.map(country => `<li class="country-item">
//             <img class="country-icon" src="${country.flags.svg}" width="40">
//             ${country.name.common}
//             </li>`).join('');
        
//         countriesListRef.insertAdjacentHTML("beforeend", listMarkup)
        
//     }

// }

// function onError(error) {
//     return console.log(error);
// }





    // const inputValue = name.target.value.trim();

// .then(onSuccses).catch(onError)