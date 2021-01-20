//console.log("this is arrays")

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);
// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

// students[0] = 'Matthew';
// console.log(students);


// array with a function

// const valuePrinter = (array, index) => {
//     return (array[index]);
// };

// console.log(valuePrinter([1, 2, 3, 4, 5, 6, ], 4));
// console.log(valuePrinter(students, 3));



// const IsNameInArray = (array, findItem) => {
//     if (array.includes(findItem)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const IsNameInArray2 = (array, findItem) => {
//     return array.indexOf(findItem) ? true : false;
// };

// const IsNameInArray3 = (array, findItem) => {
//   return array.find(findItem) ? true : false;
// }

// console.log(IsNameInArray(students, 'Sean'));
// console.log(IsNameInArray2(students, 'Sean'));

// for (let i = 0; i <= 15; i++) {
//     console.log(i);
// }

// const functionforTad = () => {
//     for (let i = 0; i <= 15; i++) {
//         console.log(i);
//     }
// }

// functionforTad();


// const EC14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];

// for (let i = 0; i < EC14Instructors.length; i++) {
//     console.log(EC14Instructors[i]);
// }


const colors = ['red', 'orage', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
    let domString = '';

    for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[1]}</h1>`;
    }
    console.log(domString);
}

// colorLoop();

const instructors = [
    { first: 'Trinity', last: 'Christina' },
    { first: 'Aja', last: 'Washington' },
    { first: 'Teresa', last: 'Vasquez' },

]

const nameLoop = () => {
    let domString = '';

    for (let i = 0; i < instructors.length; i++) {
        domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>\n`;
    }
    console.log(domString);
}
nameLoop();






















// END