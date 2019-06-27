moment.locale('fr');
const now = moment();

let daysInMonth = now.daysInMonth();


document.getElementById('month').innerHTML = now.format('MMMM');

let monday = document.getElementsByClassName("mon"); // return HTMLCollection
let tuesday = document.getElementsByClassName("tue"); // return HTMLCollection
let wednesday = document.getElementsByClassName("wed"); // return HTMLCollection
let thursday = document.getElementsByClassName("thu"); // return HTMLCollection
let friday = document.getElementsByClassName("fri"); // return HTMLCollection
let saturday = document.getElementsByClassName("sat"); // return HTMLCollection
let sunday = document.getElementsByClassName("sun"); // return HTMLCollection

let modal = document.querySelector('.modal');
let trigger = document.querySelector('.cell');
let closeButton = document.querySelector('.close-button');


// Récupère les jours associé aux dates du mois en cours

for (let i = 1; i <= daysInMonth; i++) {
    let dayName = now.date(i).format('dddd');

    // Insère tous les numéros dans le tableau
    switch (dayName) {
        case "lundi" :
            for (let j = 0; j < monday.length; j++) {
                if (monday.item(j).innerHTML == "") {
                    monday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "mardi" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < tuesday.length; j++) {
                if (tuesday.item(j).innerHTML == "") {
                    tuesday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "mercredi" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
                tuesday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < wednesday.length; j++) {
                if (wednesday.item(j).innerHTML == "") {
                    wednesday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "jeudi" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
                tuesday.item(0).innerHTML = "x";
                wednesday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < thursday.length; j++) {
                if (thursday.item(j).innerHTML == "") {
                    thursday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "vendredi" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
                tuesday.item(0).innerHTML = "x";
                wednesday.item(0).innerHTML = "x";
                thursday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < friday.length; j++) {
                if (friday.item(j).innerHTML == "") {
                    friday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "samedi" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
                tuesday.item(0).innerHTML = "x";
                wednesday.item(0).innerHTML = "x";
                thursday.item(0).innerHTML = "x";
                friday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < saturday.length; j++) {
                if (saturday.item(j).innerHTML == "") {
                    saturday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        case "dimanche" :
            if (i === 1) {
                monday.item(0).innerHTML = "x";
                tuesday.item(0).innerHTML = "x";
                wednesday.item(0).innerHTML = "x";
                thursday.item(0).innerHTML = "x";
                friday.item(0).innerHTML = "x";
                saturday.item(0).innerHTML = "x";
            }
            for (let j = 0; j < sunday.length; j++) {
                if (sunday.item(j).innerHTML == "") {
                    sunday.item(j).innerHTML = i;
                    break;
                } else {
                    continue;
                }
            }
            break;
        default :
            console.log("Erreur : " + dayName);
            break;
    }

    //  Grise les cases sans numéros
    let greyCell = document.getElementsByTagName('td');

    if (greyCell.item(i - 1).innerHTML == "x") {
        greyCell.item(i - 1).setAttribute('style', 'background: gainsboro; cursor: not-allowed; ');
    }

    // Les Modales c'est trop rigolo hihhihihihihihihihihihihi

    // Affiche ou enlève la modale
    function toggleModal() {
        console.log('toggle');
        modal.classList.toggle('show-modal');
    }

    // Agis sur l'affichage de la modale
    function modalOnClick(event) {
        console.log(event.target.className);
        if (event.target.className.includes('cell') === true) {
            toggleModal();
            console.log('oui');
        }
    }

    trigger.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', modalOnClick);

}





