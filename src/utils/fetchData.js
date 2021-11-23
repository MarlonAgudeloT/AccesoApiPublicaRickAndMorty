//PETICIONES A API RICK AND MORTY
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


//NO SE HACE CON FETCH POR QUE ESTAMOS UTILIZANDO CALLBACKS
//POR ESO TAMBIEN USAMOS XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve,reject) => {
   
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
        }
    });
    xhttp.send()
  });
}

module.exports = fetchData;