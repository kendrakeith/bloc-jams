var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    forEach(points, revealPoint);
};

window.onload = function() {
    
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    window.addEventListener('scroll', function(event) {
        
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
        }
                        
    });
    
};