const dataUrl = "./static/Resources/filtered.json"

// Function to return number of instances for any field 
function createValues (array) {
  let x = [],
    y = [],
    arr = array, 
    prev;
  arr.sort();
  for (let element of arr) {
    if (element !== prev) {
      x.push(element);
      y.push(1);
    }
    else ++y[y.length - 1];
    prev = element;
  }
  return [x, y];
};
// Creating the line chart
d3.json(dataUrl).then(function(data){
  var years = data.map(row => row["date"].split("-")[0]);
  // console.log(years);

  var xData = createValues (years)[0];
  // console.log (xData);
  var yData = {
        labels: xData,
        datasets: [{
          label: 'Number of Sightings Per Year',
          backgroundColor: 'red',
          borderColor: 'red',
          data: createValues (years)[1],
        }]
  };
  var config = {
    type: 'line',
    data: yData,
    options: {transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    }}
  };
  var lineChart = new Chart(
    document.getElementById('line-chart'),
    config
  );
});

// Creating the doughnut chart
d3.json(dataUrl).then(function(data){
  var shapes = data.map(row => row["shape"]);
  console.log(shapes);

  var labels = createValues (shapes)[0];
  var data = createValues (shapes)[1];
  console.log(labels);
  var data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: data,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',

        'rgb(99, 132, 255)',
        'rgb(162, 235, 54)',
        'rgb(205, 86, 255)',

        'rgb(132, 255, 99)',
        'rgb(235, 54, 162)',
        'rgb(86, 255, 205)',

        'rgb(255, 126, 0)',
        'rgb(0, 255, 126)',
        'rgb(126,0, 255)',

        'rgb(99, 132, 255)',
        'rgb(162, 235, 54)',
        'rgb(205, 86, 255)',

        'rgb(132, 255, 99)',
        'rgb(235, 54, 162)',
        'rgb(86, 255, 205)',

        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)',
      ],
      hoverOffset: 4
    }]
  };

  var config = {
    type: 'doughnut',
    data: data,
  };
  var doughnutChart = new Chart(
    document.getElementById('pie-chart'),
    config
  );
});

// Creating bar charts
d3.json(dataUrl).then(function(data){
  var cities = data.map(row => row["city"]);
  console.log(cities);

  var allCities = createValues(cities)[0];
  var allInstances = createValues(cities)[1];

  var ufoSightings = allInstances.reduce(function(ufoSightings, field, index) {
    ufoSightings[allCities[index]] = field;
    return ufoSightings;
  }, {});

  console.log(ufoSightings);

  var allSightings = Object.keys(ufoSightings).map(key => [key, ufoSightings[key]]);

  var topSightings=allSightings.sort((a,b) => (b[1]-a[1])).slice(0,20);

  console.log(topSightings);
  
  var xValues = [];
  for (i=0; i<topSightings.length; i++){
    xValues.push(topSightings[i][0]);
  };

  var yValues = [];
  for (i=0; i<topSightings.length; i++){
    yValues.push(topSightings[i][1]);
  };
  
  var labels = xValues;
  var data = {
    labels: labels,
    datasets: [{
      label: 'Top 20 Sighting Locations',
      data: yValues,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  var barChart = new Chart(
    document.getElementById('top-20'),
    config
  );

});
