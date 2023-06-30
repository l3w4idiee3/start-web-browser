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

//2
// set listeners and start app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();