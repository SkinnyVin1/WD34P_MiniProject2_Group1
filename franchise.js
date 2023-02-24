// ===============================
// FRANCHISE
// ===============================
var forwardism = document.getElementById("forwardism");
forwardism.addEventListener('click', franchiseShow)

function franchiseShow(){
    var locationism = document.getElementById("locationism");
    locationism.style.animation = "toTheLeft 0.8s linear";
    setTimeout(function(){
        locationism.style.display = "none"
    },1000);
}