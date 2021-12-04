import './css/styles.css';
import countryTpl from '../tamplates/country.hbs';
import countryOne from '../tamplates/countryOne.hbs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from '../fetchCountries.js';


 const refs = {
 searchForm: document.querySelector('input#search-box'),
 countryList: document.querySelector('.country-list'),
 container: document.querySelector('.country-info'),
 }

const DEBOUNCE_DELAY = 300;
refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.target.value;
  const inputValue = form.trim();
  
   if (inputValue === '') {
    refs.countryList.innerHTML = '';
    refs.container.innerHTML = '';
     return;
   }

 fetchCountries(inputValue).then(onSuccses).catch(onError);

}

function onSuccses(name) {
  console.log('eto then')
  const markupList = countryOne(name);
  const markupOneCountries = countryTpl(name);
  refs.countryList.innerHTML = markupList;

  if (name.length > 10) {
    return Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.')

  }
   else if (name.length >= 2 && name.length <= 10) {

    refs.container.innerHTML = countryTpl;
  }
  else if (name.length === 1) {
   refs.container.innerHTML = markupOneCountries;
    refs.countryList.innerHTML = '';
   } 
}
function onError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name')
  refs.container.innerHTML = '';
  
}
