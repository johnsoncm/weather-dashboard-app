// var searchBtn = document.getElementById('searchBtn');
// var tableBody = document.getElementById('table-body');

var searchButton  = $('.search-button');
var tableBody = $('#table-body');
var weatherCards = $('#weather-cards');
var searchInput = $('#city-input');





function getParams(){
    var searchParamsArr = document.location.search.split('&');

    var query = searchParamsArr[0].split('=').pop();
    var format = searchParamsArr[1].split('=').pop();

    getApi(query, format);
    
}




function getApi(query, format){
    // api key 363dbc272863bed129cf4807c0a7c46a

    var location = searchInput.val();

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=363dbc272863bed129cf4807c0a7c46a';
console.log(requestUrl);

    //fetch request gets data from open weather api
    fetch(requestUrl)
    .then(function (response) {
        return response.json();

    })
    .then(function(data){
        console.log("data",data);

   



        // for (var i = 0; i < data.length; i++){
        //     var createTableRow = document.createElement('tr');
        //     var tableData = document.createElement('td');
        //     var link = document.createElement('a');

        //     link.textContent = data[i].html_url;
        //     link.href = data[i].html_url;

        //     tableData.appendChild(link);
        //     createTableRow.appendChild(tableData);
        //     tableBody.appendChild(createTableRow);
        });
//     })
         
}

    //VALUES NEEDED TO PARSE AND POPULATE CARDS 
        // data.wind.speed
        // data.main.humidity
        // data.main.temp
        // data.main.feels_like



function renderForecastCard(forecast){
   // WORK WITH THESE VARIABLES TO ASSIGN TO ELEMENTS BELOW
    //function to display a forecast card given an object from open weather api
    //daily forecast

 
    var unixTs = forecast.dt;

    var iconUrl = 'https://openweathermap.org/img/w/${forecast.weather[0].icon}.png';
    var iconDescription = forecast.weather[0].description;
    var tempF = main.temp;
    var humidity = main.humidity;
    var windMph = wind.speed;
    var feelsLike = main.feels_like;

    var resultsBlock = $('.mr-0');
    var resultsTemp = $('#temperature');
    var resultsFeels = $('#feels-like');
    var resultsHumidity = $('#humidity');
    var resultsWind = $('#wind-speed');

    tempF.textContent
    


    //Create elements for a card
    // var col = document.createElement('div');
    // var card = document.createElement('div');

    // var cardBody = document.createElement('div');
    // resultsBlock.classList.add('card-body');
    // result

    // var cardTitle = document.createElement('h5');
    // var weatherIcon = document.createElement('img')
    // var tempEl = document.createElement('p')
    // var windEl = document.createElement('p')
    // var humidityEl = document.createElement('p')

    // col.append(card);
    // card.append(cardBody);
    // cardBody.append(cardTitle, weatherIcon, windEl, humidityEl);

}

displayResults(); {

    var resultCard = $('<div>');
    resultCard.addClass('.city-name');

    resultCard //creates a div
    resultsBlock//references mr-0 class
    resultBody//creates a div
    resultObj//equals titleEl.textContent
    bodyContentEl



    resultsBlock.innerHTML = '';
    for (var i = 0; i < locRes.results.length; i++) {

    }

};


$('#weather-cards').css('display','none');

$('.mr-0').css('display','none');



//When the Start button is clicked the questions and choices are displayed and the start button as well as the text disappear. The countdown begins.
searchButton.on("click", () => {
    getApi();
    // renderForecastCard();
    //function that gets api when search button is clicked executes here

    getApi();
    $('#weather-cards').css('display','flex','row');
    $('.mr-0').css('display','flex','');
// document.ready();



});