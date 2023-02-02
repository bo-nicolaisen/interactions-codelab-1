
/*
brug document.getElementById() til at finde dom elementer der er røde og gule.
consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/


const red = document.getElementById('redfigure'); {
    console.log(redFigure);
}

const yellow = document.getElementById('yellowfigure'); {
    console.log(yellowFigure);
}


/*
brug document.getElementsByClassName() til at finde dom elementer
og consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/

const classf = document.getElementsByClassName('purpleFigures'); {
    console.log(classf);
}

const classfi = document.getElementsByClassName('myFigure'); {
    console.log(classfi);
}



/*
find dom elementer med id redFigure og yellowFigure og brug innerHTML til at ændre deres tekst
skriv din kode her.
*/

nyTekst();
function nyTekst(){
    redFigure.innerHTML = "Hello World";
}

nytekst();
function nytekst(){
    yellowFigure.innerHTML = "Hello My Friend";
}


