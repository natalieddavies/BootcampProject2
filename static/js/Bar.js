// BAR CHARTS
// Read in data from API 'jobs'
// url = "http://127.0.0.1:5000/jobs"
// d3.json(url).then(function(response) {
//   console.log(response);
// });



// // return data promise and save 
// const dataPromisejobs = d3.json(url);
// console.log("Data Promise: ", dataPromisejobs);


var ctx = document.getElementById('chart').getContext('2d');


var data = {
  labels: ["Artistic", "Banking", "Clerical", "Computer", "Construction", "Education", "Entertainment", "Executive", "Hospitality", "Law", "Medicine", "Military", "Other", "Political","Sales", "Science", "Student", "Transportation", "Unemployed"],
  datasets: [
    //cats
      {
          label: "Likes Cats",
          backgroundColor: "pink",
          data: [274,68,45,365,38,196,131,100,49,63,129,3,355,32,108,251,228,23,22]
    //dogs
      },
      {
          label: "Likes Dogs",
          backgroundColor: "turquoise",
          data: [829,719,174,943,280,808,509,705,369,402,989,64,1765,164,1379,1109,1087,95,42]
      },
      //both
      {
          label: "Likes Both",
          backgroundColor: "grey",
          data: [2077,644,387,2006,421,1447,949,794,559,523,1491,79,3344,292,1518,1825,2177,148,153]
      }
  ]
};
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
      barValueSpacing: 20,
      scales: {
          yAxes: [{
              ticks: {
                  min: 0,
              }
          }]
      }
  }
});


//console.log(dataPromisejobs);

// var description = [];
// description.push('10');
// var myvalues = [];
// myvalues.push('30');
// var barChartData = {
//                     labels: description,
//                     datasets: [{
//                     data: myvalues
//                     }]
//                    }

// myChart.data.push(barChartData);
