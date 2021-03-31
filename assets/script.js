// var searchBtn = document.getElementById('searchBtn');
// var tableBody = document.getElementById('table-body');

var searchButton  = $('.search-button');
var tableBody = $('#table-body');
var weatherCards = $('#weather-cards');
var resultsBlock = $('.mr-0');
var resultsTemp = $('#temperature');
var resultsFeels = $('#feels-like');
var resultsHumidity = $('#humidity')
var resultsWind = $('#wind-speed');
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

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=363dbc272863bed129cf4807c0a7c46a'
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
         
};

    //VALUES NEEDED TO PARSE AND POPULATE CARDS 
        // wind.speed
        // main.humidity
        // main.temp
        // main.feels_like



// displayResults(); {

//     // var resultCard = $('<div>');
//     // resultCard.addClass('.city-name');

//     // resultCard //creates a div
//     // resultsBlock//references mr-0 class
//     // resultBody//creates a div
//     // resultObj//equals titleEl.textContent
//     // bodyContentEl



//     // resultsBlock.innerHTML = '';
//     // for (var i = 0; i < locRes.results.length; i++) {

//     // }

// };


$('#weather-cards').css('display','none');

$('.mr-0').css('display','none');



//When the Start button is clicked the questions and choices are displayed and the start button as well as the text disappear. The countdown begins.
searchButton.on("click", () => {
    getApi();
    
    //function that gets api when search button is clicked executes here

    getApi();
    $('#weather-cards').css('display','flex','row');
    $('.mr-0').css('display','flex','');
// document.ready();



});