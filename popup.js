function makeDisapear() {
    document.getElementById('sun').children[1].style.display = '';
    document.getElementById('mercury').children[1].style.display = '';
    document.getElementById('venus').children[1].style.display = '';
    document.getElementById('earth').children[1].style.display = '';
    document.getElementById('mars').children[1].style.display = '';
    document.getElementById('jupiter').children[1].style.display = '';
    document.getElementById('saturn').children[1].style.display = '';
    document.getElementById('uranus').children[1].style.display = '';
    document.getElementById('neptune').children[1].style.display = '';
    document.getElementById('pluto').children[1].style.display = '';
}
document.getElementById('sun').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('sun').children[1].style.display = 'flex';
    console.log(document.getElementById('sun').children[1].style.display);
});


document.getElementById('mercury').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('mercury').children[1].style.display = 'flex';
    console.log(document.getElementById('mercury').children[1].style.display);
});


document.getElementById('venus').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('venus').children[1].style.display = 'flex';
    console.log(document.getElementById('venus').children[1].style.display);
});

planetName = 'earth';
document.getElementById('earth').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('earth').children[1].style.display = 'flex';
    console.log(document.getElementById('earth').children[1].style.display);
});

planetName = 'mars';
document.getElementById('mars').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('mars').children[1].style.display = 'flex';
    console.log(document.getElementById('mars').children[1].style.display);
});

planetName = 'jupiter'
document.getElementById('jupiter').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('jupiter').children[1].style.display = 'flex';
    console.log(document.getElementById('jupiter').children[1].style.display);
});

document.getElementById('saturn').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('saturn').children[1].style.display = 'flex';
    console.log(document.getElementById('saturn').children[1].style.display);
});

document.getElementById('uranus').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('uranus').children[1].style.display = 'flex';
    console.log(document.getElementById('uranus').children[1].style.display);
});

planetName = 'neptune';
document.getElementById('neptune').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('neptune').children[1].style.display = 'flex';
    console.log(document.getElementById('neptune').children[1].style.display);
});

document.getElementById('pluto').addEventListener('click', () => {
    makeDisapear();
    document.getElementById('pluto').children[1].style.display = 'flex';
    console.log(document.getElementById('pluto').children[1].style.display);
});

document.getElementsByTagName('body')[0].addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        makeDisapear();
    }
});