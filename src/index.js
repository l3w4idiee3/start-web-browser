//1
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.regeion-name')
const apiKey = document.querySelector('.api-key');
// results divs
const erros = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.myregion');
const clearBtn = document.querySelector('.clear-btn');
//6
//call the API

//5
//set up user's api key and region

//4
// handle form submission

//3 initial checks
function init() {
    //if anything is in localStorage, pick it up
    const storedApiKey = localStorage.getItem('.apiKey');
    const storedRegion = localStorage.getItem('regionname');
    //set icons to be generic green
    //todo
    if (storedApiKey === null || storedRegion === null) {
        //if we dont have the keys ,show the form
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
        clearBtn.style.display = 'none';
        errors.textContent = '';
    } else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
        results.style.display = 'none';
        form.style.display = 'none';
        clearBtn.style.display = 'block';
    }
};
function reset(e) {
    e.preventDefault();
    //clear local storage for region only
    localStorage.removeItem('regionName');
    init();
}
//2
// set listeners and start app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();