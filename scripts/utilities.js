var pointsArray = document.getElementsByClassName('point');

function forEach(text, point) {
    for point{
        revealPoint();
    };
}

var revealPoint = function(point) {
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";  
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";    
    }
};

