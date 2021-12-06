document.addEventListener('DOMContentLoaded', function() {

    // nav stuff
    hideAllSections();

    const navComposer = document.getElementById('nav-composer');
    navComposer.onclick=showComposer;

    const navTech = document.getElementById('nav-technologist');
    navTech.onclick=showTech;

    const navClimate = document.getElementById('nav-climate');
    navClimate.onclick=showClimate;

    


});

function hideAllSections() {
    // hide all
    document.getElementById('music').style.display="none";
    document.getElementById('technology').style.display="none";
    document.getElementById('climate').style.display="none";

}

function showComposer() {

    // hide others
    document.getElementById('technology').style.display="none";
    document.getElementById('climate').style.display="none";

    // show music
    document.getElementById('music').style.display="block";
}

function showTech() {

    // hide others
    document.getElementById('music').style.display="none";
    document.getElementById('climate').style.display="none";

    // show tehcnology
    document.getElementById('technology').style.display="block";
}

function showClimate() {

    // hide others
    document.getElementById('music').style.display="none";
    document.getElementById('technology').style.display="none";

    // show tehcnology
    document.getElementById('climate').style.display="block";
}