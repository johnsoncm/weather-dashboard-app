// var searchBtn = document.getElementById('searchBtn');
// var tableBody = document.getElementById('table-body');

var searchButton  = $('#searchBtn');
var tableBody = $('#table-body');
var weatherCards = $('#weather-cards');
var resultsBlock = $('.mr-0');
var resultsTemp = $('#temperature');
var resultsFeels = $('#feels-like');
var resultsHumidity = $('#humidity')
var windSpeed = $('#wind-speed');





function getApi(){
    // api key 363dbc272863bed129cf4807c0a7c46a

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Richmond&appid=44fc04aab9d8e095d4cc9144a46cd661'


    //fetch request gets data from open weather api
    fetch(requestUrl)
    .then(function (response) {
        return response.json();

    })
    .then(function(data){
        console.log(data)

       //VALUES NEEDED TO PARSE AND POPULATE CARDS 
        // wind.speed
        // main.humidity
        // main.temp
        // main.feels_like



        // for (var i = 0; i < data.length; i++){
        //     var createTableRow = document.createElement('tr');
        //     var tableData = document.createElement('td');
        //     var link = document.createElement('a');

        //     link.textContent = data[i].html_url;
        //     link.href = data[i].html_url;

        //     tableData.appendChild(link);
        //     createTableRow.appendChild(tableData);
        //     tableBody.appendChild(createTableRow);
        // }
    })
         
};
getApi();
// searchBtn.addEventListener('click' , getApi);



$('#weather-cards').css('display','none');
// weatherCards.style.display = "none";
// $('searchBtn').css('display', 'none');
$('.mr-0').css('display','none');

// resultsBlock.style.display = "none";


//When the Start button is clicked the questions and choices are displayed and the start button as well as the text disappear. The countdown begins.
searchButton.addEventListener("click", () => {
    //function that gets api when search button is clicked executes here
    // weatherCards.style.display = "block"
    getApi();
    $('#weather-cards').css('display','block');
    $('.mr-0').css('display','block');
    // weatherCards.style.display = "block";
    // resultsBlock.style.display = "block";

    // $('searchBtn').css('display', 'block');

    // btn.style.display = "none";
    // container.style.display = "none";
    // questionPlaceholder.style.display = "block";
    // displayChoice.style.display = "block";
    // startQuestions();

});