function Both() {
url = "http://127.0.0.1:5000/secretsboth "
d3.json(url).then(function(likesBoth) {
    var random = likesBoth[Math.floor(Math.random() * likesBoth.length)].secret;
    //alert(random);
    document.getElementById("quoteDisplay").innerHTML=random;
    }
)};
function Cats() {
    caturl = "http://127.0.0.1:5000/secretscats"
    d3.json(caturl).then(function(likesCats) {
    console.log(likesCats);
    var random = likesCats[Math.floor(Math.random() * likesCats.length)].secret;
    //alert(random);
    document.getElementById("quoteDisplay").innerHTML=random;
    }
)};
function Dogs() {
    dogurl = "http://127.0.0.1:5000/secretsdogs"
    d3.json(dogurl).then(function(likesDogs) {
    console.log(likesDogs);
    var random = likesDogs[Math.floor(Math.random() * likesDogs.length)].secret;
        //alert(random);
    document.getElementById("quoteDisplay").innerHTML=random;
    }
)};