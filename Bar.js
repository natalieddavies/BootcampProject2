// BAR CHARTS
// Read in data from API 'jobs'
url = "http://127.0.0.1:5000/jobs"
d3.json(url).then(function(response) {
  console.log(response);
});
// return data promise and save 
const dataPromisejobs = d3.json(url);
console.log("Data Promise: ", dataPromisejobs);
// 

//var ctx = document.getElementById('bar').getContext('2d');
//var myBarChart = new Chart(ctx, {
  //type: 'bar',
  //data: dataPromisejobs,
  //options: 'bottom'
//});
//console.log(dataPromisejobs);

//var description = [];
//description.push('10');
//var myvalues = [];
//myvalues.push('30');
//var barChartData = {
                    //labels: description,
                    //datasets: [{
                                 //data: myvalues
                              //}]
                   //}

//myChart.data.push(barChartData);
