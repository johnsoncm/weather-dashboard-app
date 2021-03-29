// var searchBtn = document.getElementById('searchBtn');
// var tableBody = document.getElementById('table-body');

var searchButton  = $('#searchBtn');
var tableBody = $('#table-body');

function getApi(){
    // api key 363dbc272863bed129cf4807c0a7c46a

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&AAPID=44fc04aab9d8e095d4cc9144a46cd661'


    //fetch request gets 
    fetch(requestUrl)
    .then(function (response) {
        return response.json();

    })
    .then(function(data){
        console.log(data)

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

