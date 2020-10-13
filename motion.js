let documentWidth = 3000;

let documentHeight = documentWidth;
var moving = true;
function planet(id, radius, orbit, start = 0) {
    this.id = id;

    this.radius = radius;
    this.orbit = orbit;
    this.start = start;
    this.position = function (time) {
        document.getElementById(id).style.top = `${documentHeight/2 - radius + orbit*Math.cos(time+start)}px`;
        document.getElementById(id).style.left = `${documentWidth/2 - radius + orbit*Math.sin(time+start)}px`;
    };
};
let sun = new planet('sun', 100, 0, 1);
let mercury = new planet('mercury', 37, 190, 4);
let venus = new planet('venus', 45, 350, 2);
let earth = new planet('earth', 55, 500, 8);
let mars = new planet('mars', 50, 650, 9);
let jupiter = new planet('jupiter', 75, 800, 5);
let saturn = new planet('saturn', 60, 1000, 2);
let uranus = new planet('uranus', 40, 1150, 6);
let neptune = new planet('neptune', 35, 1300, 1);
let pluto = new planet('pluto', 25, 1400, 3);
planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
let angle = Math.PI / 2;
let speeds = [0, 2, 1, 0.5, .75, 0.4, .5, 0.8, .4, .3]

function orbit(time, lastTime) {

    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    for(index in planets){
        planets[index].position(angle*speeds[index]);
    }
    if(moving){
        requestAnimationFrame(newTime => orbit(newTime, time));
    }
};
requestAnimationFrame(orbit);
function play(){
    
    if(moving===false){
        moving = true;
        requestAnimationFrame(orbit);
    }
}
function pause(){
    moving = false;
}

/*
sun.position(i);
mercury.position(i);
venus.position(i);
earth.position(i);
mars.position(i);
jupiter.position(i);
saturn.position(i);
uranus.position(i);
neptune.position(i);
pluto.position(i);*/