let url = `https://api.le-systeme-solaire.net/rest/bodies/`;

function fillPopup(info, popup) {
    let popupDiv = document.getElementById(popup);
    let title = popupDiv.children[0];
    title.innerHTML = info.englishName;
    let discoveredInfo = popupDiv.children[1];
    let popupList = popupDiv.children[3];
    if (info.discoveryDate === '') {
        discoveredInfo.innerHTML = 'Discovered a LONG time ago';
    } else {
        discoveredInfo.innerHTML = `Discovered by ${info.discoveredBy} on ${info.discoveryDate}`;
    }
    popupList.children[0].innerHTML = info.isPlanet ? "It is a planet" : "It is not a planet";
    popupList.children[4].innerHTML = `Gravity: ${info.gravity} m/s^2`;
    popupList.children[2].innerHTML = `Mass: ${info.mass.massValue}x10^${info.mass.massExponent} kilograms`;
    popupList.children[3].innerHTML = `Radius: ${info.meanRadius} meters`;
    if (info.moons === null) {
        if (info.englishName === 'Sun') {
            popupList.children[1].innerHTML = `Has 9 planets`;

        } else {
            popupList.children[1].innerHTML = `Doesn't have any moons`;
        }
    } else {
        if (info.moons.length === 1) {
            popupList.children[1].innerHTML = `Has a single moon`;
        } else {
            popupList.children[1].innerHTML = `Has ${info.moons.length} moons`;
        }
    }
    popupList.children[5].innerHTML = `Density: ${info.density}`;
    console.log('filled');

}

function getInfoForSelectedPlanets(url) {
    fetch(url).then((responce) => {
        return responce.json();
    }).then((json) => {
        bodies = json.bodies.filter((body) => {

            return body.englishName === 'Sun' || body.englishName === 'Mercury' || body.englishName === 'Venus' || body.englishName === 'Earth' || body.englishName === 'Mars' || body.englishName === 'Jupiter' || body.englishName === 'Saturn' || body.englishName === 'Uranus' || body.englishName === 'Neptune' || body.englishName === 'Pluto';
        });
        console.log(bodies);
        fillPopup(bodies[7], 'sunPopup');
        fillPopup(bodies[5], 'mercuryPopup');
        fillPopup(bodies[9], 'venusPopup');
        fillPopup(bodies[8], 'earthPopup');
        fillPopup(bodies[4], 'marsPopup');
        fillPopup(bodies[3], 'jupiterPopup');
        fillPopup(bodies[6], 'saturnPopup');
        fillPopup(bodies[0], 'uranusPopup');
        fillPopup(bodies[2], 'neptunePopup');
        fillPopup(bodies[1], 'plutoPopup');

    });
}
getInfoForSelectedPlanets(url);
console.log('program finisehd');