const school = 'Raj UK Uttara Model School';

// console.log(school)
console.log(school)
console.log(school.toLowerCase());
console.log(school.toUpperCase());

//uppercase : ABCD EFJ
//lowercase : abcd efj


// const subject = 'Chemistry';
// const book = 'chemIstry';

// if(subject === book){
//     console.log(' I read book')
// }
// else {
//     console.log(' I do not read book');
// }



const subject = 'Chemistry';
const book = 'chemIstry';

if(subject.toLowerCase()=== book.toLowerCase()){
    console.log(' I read book')
}
else {
    console.log(' I do not read book');
}



// string space remove use by    ''trim''


const drink = 'water';
const liquid = '  water  '

if(drink.trim() === liquid.trim()){
    console.log('water nickname is life')
}
else{
    console.log(' sea water is solt')
}
