// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("Enter your Year of birth!");
    var myAgeInDay = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Your are ' + myAgeInDay + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(myAgeInDay);
}
 
function reset(){
    document.getElementById('ageInDays').remove();
}
