// let & Const ----------------------------------------------------------------
const name1 = 'Cal';
let age = 29; // let instead of var, const if not going to be changed
const hasHobbies = true;

age = 30

// Arrow Functions ------------------------------------------------------------
// can use traditional function declaration or this one
const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
// console.log(summarizeUser(name1, age, hasHobbies));

// short function examples
const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(addOne(1));
// console.log(add(1, 2));
// console.log(addRandom());

// Objects: Properties & Methods ----------------------------------------------
const person = {
    name: 'Cal',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
// person.greet();

// Arrays & Array Methods ------------------------------------------------------
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    //console.log(hobby);
}

// Maps are a way to change lists and returns a new list with content called on
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// Arrays, Objects & Reference Types -------------------------------------------
// hobbies is const but is a reference type to a point in memory so it can still be added to
// hobbies.push('Programming');
//console.log(hobbies);

// Spread Operator & Rest Parameters -------------------------------------------
// one way to copy array to new array
// const copiedArray = hobbies.slice();

// spread operator. without it it creates a 2d array with 1 element
// const copiedArray =  [...hobbies];
// console.log(copiedArray);

// limited to only 3 arguments
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }

// buddles all inputs into an array
// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1, 2, 3, 4));

// Destructuring ----------------------------------------------------------------
// user to pull a specific value list of values
const printName = ({name}) => {
    console.log(name);
}
//printName(person);

// Can pull multiple values
const {name2, age2} = person;
//console.log(name2,age2);

// Async Code & Promises --------------------------------------------------------
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });  
    return promise; 
};

// setTimeout appears after hi, it is async
setTimeout(() => {
    console.log('Timer is done!')
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hi!');