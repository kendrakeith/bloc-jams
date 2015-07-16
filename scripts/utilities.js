var forEach = function (pointsArray, callback) {
    for (i = 0; i < pointsArray.length; i++) {
        callback(pointsArray[i]);
    }
};

var revealPoint = function(point) {
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";  
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";    
    };
