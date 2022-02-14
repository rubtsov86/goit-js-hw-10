import Notiflix from 'notiflix';

const countriesListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');


export function onSuccses(data) {
    countriesListRef.innerHTML = '';
    countryInfoRef.innerHTML ='';

    if (data.length > 10) {
        
        return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    }
    
    else if (data.length === 1) {
        
        const cardMarkup = `
            <div class="title__wrapper">
                <img src="${data[0].flags.svg}" alt="" class="country-icon" width="40">
                <p class="title">${data[0].name.common}</p>
            </div>
            <ul class="country-description">
                <li class="country-description__item"><span class="country-description__text">Capital:</span>${data[0].capital}</li>
                <li class="country-description__item"><span class="country-description__text">Population:</span>${data[0].population}</li>
                <li class="country-description__item"><span class="country-description__text">Languages:</span>${Object.values(data[0].languages).join(', ')}</li>
            </ul>
        `
        console.log(cardMarkup);
        countryInfoRef.insertAdjacentHTML("beforeend", cardMarkup)
    }
        
    else if (data.length > 1) {
        
        const listMarkup = data.map(country => `<li class="country-item">
            <img class="country-icon" src="${country.flags.svg}" width="40">
            ${country.name.common}
            </li>`).join('');
        
        countriesListRef.insertAdjacentHTML("beforeend", listMarkup)
        
    }

}

export function onError(error) {
    return console.log(error);
}