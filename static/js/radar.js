var ctx = document.getElementById('radar').getContext('2d');
var data = {
    labels: ["Aquarius", "Aries", "Cancer", "Capricorn", "Gemini", "Leo", "Libra", "Pisces", "Sagittarius", "Scorpio", "Taurus", "Virgo"],
    datasets: [

    //cats
    {
        label: "Cats",
        backgroundColor: "lightcoral",
        data: [173, 184, 200, 165, 228, 229, 209, 188, 174, 213, 203, 206]
  //dogs
    },
    {
        label: "Dogs",
        backgroundColor: "lightsteelblue",
        data: [946, 960, 1014, 885, 1044, 1064, 1012, 984, 939, 1016, 1037, 1027]
    },
    //both
    {
        label: "Both",
        backgroundColor: "darkseagreen",
        data: [1640, 1691, 1787, 1499, 1811, 1867, 1728, 1635, 1685, 1707, 1750, 1765]
        }
    ]
};

var myRadarChart = new Chart(ctx, {
    type: 'radar',
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