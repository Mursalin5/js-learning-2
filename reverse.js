const sentence = 'I am learning web dev.'
// const result = '.veD bew gninrael ma I';


//web
//bew
//donal
//d
//od
//nod
//anod
//lanod

let reverse = ''

for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = ''
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);


//shortcut
// const reversed = sentence;
// console.log(reversed);


const reversed = sentence.split('').reverse().join('');
console.log(reversed);



