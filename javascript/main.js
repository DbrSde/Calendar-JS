moment.locale('fr');
const now = moment();
console.log("On est le : " + now.format('Do MMM YYYY'));
console.log('Nombre de jour dans le mois : ' + now.daysInMonth());
console.log("Le 5em jour du mois est un : " + now.date(5).format('dddd'));


let daysInMonth = now.daysInMonth();
let calendar = [];

for (let i = 1; i <= daysInMonth; i++) {
    calendar[i] = now.date(i).format('dddd');

}

console.log(calendar);