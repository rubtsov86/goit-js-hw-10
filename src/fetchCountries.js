import { onSuccses, onError } from "./resolvedFunction";
import Notiflix from 'notiflix';

const BASE_URL = "https://restcountries.com/v3.1/name/";
const inputRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');


export default function fetchCountries(name) {
    const inputValue = inputRef.value;
    
    if (inputValue.trim() === '') {
       countriesListRef.innerHTML = '';
        countryInfoRef.innerHTML ='';
        return
    }

    const countriesList = fetch(`${BASE_URL}${inputValue.trim()}?fields=name,name.official,capital,population,flags,languages`)
        .then(r => {
            if (!r.ok) {
                Notiflix.Notify.failure("Oops, there is no country with that name");
                throw new Error(r.status);
        }
            return r.json()
        })
        .catch(error => console.log('error'));
    
    return countriesList.then(onSuccses).catch(onError);
}





