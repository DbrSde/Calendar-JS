moment.locale('fr');
const now = moment().month("Juillet");
console.log("On est le : " + now.format('Do MMM YYYY'));
console.log('Nombre de jour dans le mois : ' + now.daysInMonth());
console.log("Le 5em jour du mois est un : " + now.date(5).format('dddd'));


let daysInMonth = now.daysInMonth();


document.getElementById('month').innerHTML =  now.format('MMMM');

let monday = document.getElementsByClassName("mon"); // return HTMLCollection
let tuesday = document.getElementsByClassName("tue"); // return HTMLCollection
let wednesday = document.getElementsByClassName("wed"); // return HTMLCollection
let thuesday = document.getElementsByClassName("thu"); // return HTMLCollection
let friday = document.getElementsByClassName("fri"); // return HTMLCollection
let saturday = document.getElementsByClassName("sat"); // return HTMLCollection
let sunday = document.getElementsByClassName("sun"); // return HTMLCollection

// Récupère les jours associé aux dates du mois en cours
for (let i = 1; i <= daysInMonth; i++) {
    let dayName = now.date(i).format('dddd');


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
            for (let j = 0; j < thuesday.length; j++) {
                if (thuesday.item(j).innerHTML == "") {
                    thuesday.item(j).innerHTML = i;
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
                thuesday.item(0).innerHTML = "x";
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
                thuesday.item(0).innerHTML = "x";
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
                thuesday.item(0).innerHTML = "x";
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
}
