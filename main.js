//console.log("this is arrays")

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);
// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

students[0] = 'Matthew';
console.log(students);


// array with a function

const valuePrinter = (array, index) => {
    return (array[index]);
};

console.log(valuePrinter([1, 2, 3, 4, 5, 6, ], 4));
console.log(valuePrinter(students, 3));



const IsNameInArray = (array, findItem) => {
    if (array.includes(findItem)) {
        return true;
    } else {
        return false;
    }
};

const IsNameInArray2 = (array, findItem) => {
    return array.indexOf(findItem) ? true : false;
};

// const IsNameInArray3 = (array, findItem) => {
//   return array.find(findItem) ? true : false;
// }

console.log(IsNameInArray(students, 'Sean'));
console.log(IsNameInArray2(students, 'Sean'));
















// END