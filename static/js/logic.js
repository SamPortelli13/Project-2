// from data.js
// API key
const API_KEY = "pk.eyJ1Ijoic2FtcG9yIiwiYSI6ImNrd2JobTV1YjA4bGYyb253a3NjY3dxdTcifQ.EbnoKdEiI5Pl6TS_JaT--A";
const url = "/data";
console.log("***Version 9 ***data URL: ",url);

// var myMap = L.map("map", {
//     center: [
//       30.09, -65.71
//     ],
//     zoom: 3.5
//   });



d3.json(url).then(function(response) {  
    //console.log("data:",response);

    var tableData = response;

    var tbody =d3.select("tbody")
    console.log(tableData);

    // tableData.forEach(function(sightings) {
    // //console.log(sightings);
    // var row = tbody.append("tr");

    // Object.entries(sightings).forEach(function([key,value]){
    //     // console.log(key,value);
    //     var cell = tbody.append("td");
    //     cell.text(value);
    // });
    // })
});

var button = d3.select("#filter-btn");
console.log("1 API Key: ",API_KEY);

button.on("click",function() {
    console.log("button clicked");
    
    const url = "/data";
    console.log("data URL: ",url);
    d3.json(url).then(function(response) {  
        console.log("data:",response);
        var tableData = response;

        // var tbody =d3.select("tbody")
        // console.log(tableData);

        // Prevent the page from refreshing
        //d3.event.preventDefault();

        // Clear the table
        var table1 = document.getElementById("ufo-table-body"); 
        //table1.innerHTML ='';  

        // Select the input element and get the raw HTML node
        var inputElement_year = d3.select("#year");
        var inputElement_city = d3.select("#city");
        var inputElement_state = d3.select("#state");
        var inputElement_country = d3.select("#country");
        var inputElement_shape = d3.select("#shape");
        var inputElement_day_night = d3.select("#day_night");
        // Get the value property of each of the input elements
        var inputValue_year = inputElement_year.property("value");
        var inputValue_city = inputElement_city.property("value");
        var inputValue_state = inputElement_state.property("value");
        var inputValue_country = inputElement_country.property("value");
        var inputValue_shape = inputElement_shape.property("value");
        var inputValue_day_night = inputElement_day_night.property("value");

        // Display the value property of each of the input elements
        console.log("year:",inputValue_year);
        console.log("city:",inputValue_city);
        console.log("state:",inputValue_state);
        console.log("country:",inputValue_country);
        console.log("shape:",inputValue_shape);
        console.log("day_night:",inputValue_day_night);

        var filteredData = tableData.filter((sightings) => {

            // By default set the match to false
            var matchesYear = false;
            var matchesCity = false;
            var matchesState = false;
            var matchesCountry = false;
            var matchesShape = false;
            var matchesDay_night = false;

            sightings_year = sightings.date.substring(0,4);

            // If user has entered a value to the date field, check if it is included in the data
            if (inputValue_year != '' && sightings_year == inputValue_year) {
                matchesYear = true;
            }
            // If the user didn't enter anything in the date field, set match to true by default
            if (inputValue_year == '') {
                matchesYear = true;
            }
            // If user has entered a value to the city field, check if it is included in the data
            if (inputValue_city != '' && sightings.city == inputValue_city) {
                matchesCity = true;
            }
            // If the user didn't enter anything in the city field, set match to true by default
            if (inputValue_city == '') {
                matchesCity = true;
            }
            // If user has entered a value to the state field, check if it is included in the data
            if (inputValue_state != '' && sightings.state == inputValue_state) {
                matchesState = true;
            }
            // If the user didn't enter anything in the state field, set match to true by default
            if (inputValue_state == '') {
                matchesState = true;
            }
            // If user has entered a value to the day_night field, check if it is included in the data
            if (inputValue_day_night != '' && sightings.time == inputValue_day_night) {
                matchesDay_night = true;
            }
            // If the user didn't enter anything in the state field, set match to true by default
            if (inputValue_day_night == '') {
                matchesDay_night = true;
            }
            // If user has entered a value to the country field, check if it is included in the data
            // if (inputValue_country != '' && sightings.country == inputValue_country.toLowerCase()) {
            //     matchesCountry = true;
            // }
            // // If the user didn't enter anything in the country field, set match to true by default
            // if (inputValue_country == '') {
            //     matchesCountry = true;
            // }
            // If user has entered a value to the shape field, check if it is included in the data
            if (inputValue_shape != '' && sightings.shape == inputValue_shape) {
                matchesShape = true;
            }
            // If the user didn't enter anything in the shape field, set match to true by default
            if (inputValue_shape == '') {
                matchesShape = true;
            }

            // Will return true if all fields match
            return matchesYear && matchesState && matchesCity && matchesShape && matchesDay_night;

        });

    //  Refresh the HTML table with the filtered data
        //var tbody =d3.select("tbody")

        sightingsData=filteredData.features;

        // console.log("2! API Key: ",API_KEY);
        // var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        //   tileSize: 512,
        //   maxZoom: 18,
        //   zoomOffset: -1,
        //   id: "mapbox/streets-v11",
        //   accessToken: API_KEY
        // }).addTo(myMap);
        // console.log("streetmap: ",streetmap);
        // console.log("myMap: ",myMap);

        console.log("All Filtered data: ", filteredData);

        //  Refresh the HTML table with the filtered data


        // Clear the previous data
        var table1 = document.getElementById("ufo-table-body"); 
        table1.innerHTML="";

        var tbody =d3.select("tbody");
        filteredData.forEach(function(sightings) {
            console.log(sightings);
            var row = tbody.append("tr");
            
            Object.entries(sightings).forEach(function([key,value]){
            // console.log(key,value);
                var cell = tbody.append("td");
                cell.text(value);
            });
        });


        saveToFile(filteredData);

        function saveToFile() {

            document.getElementById('output').value = JSON.stringify(filteredData);
            var jsonObjectAsString = document.getElementById('output').value;
          
            var blob = new Blob([jsonObjectAsString], {
              //type: 'application/json'
              type: 'octet/stream'
            });
            console.log(blob);
          
            var anchor = document.createElement('a')
            anchor.download = "filtered.json";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.innerHTML = "download"
            anchor.click();
          
            console.log(anchor);
          
            document.getElementById('output').append(anchor)
          
          
          };



    });
});