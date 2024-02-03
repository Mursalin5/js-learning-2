const person = {
    name: 'arafat',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorbon', 'saintmartin', 'kuakata']
}
// console.log(person)

//dot notation
// dot symbol diya object er property er value access kora.
// console.log(person.salary);
//variable diyao kora jai
const income = person.salary;
// console.log(income)


//bracket Notation
// third bracket diya acces kora.
console.log(person['age'])
const boyos = person['age']


//error
// console.log(person.'fav places')

console.log(person['fav places'])
