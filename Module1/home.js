// Object in Javascript
// Dictionaries in Python

let student = {
    first: 'Afeez', 
    last: 'Babatunde',
    age: 34,
    height: 175,
    studentInfo: function(){
        return this.first + '\n' + this.last;
        // this is equivalent to self in Python
    }
};
// console.log(student);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 is my target  demography
var age = 30 //prompt('what is your age');
//var status = "";

if ( (age >= 18) && (age <= 35) ) {
    status = 'Target audience';
    console.log(status);
} else {
    status = 'Not my audience';
    console.log(status);76
}

// Switch Statement
// Differentiate between weekday vs weekend
// day 0 --> Sunday
// day 6 --> Saturday -->
// day 4 --> Thursday --> weekday

switch (2) {
    case 0:
        test = 'weekend';
        break;
    case 5:
        test = 'weekend';
        break;
    case 6:
        test = 'weekend';
        break;
    default:
        test = 'weekday'
}
console.log(test);