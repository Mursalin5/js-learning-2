const mobile = {
    brand: 'Iphon',
    color: '150000',
    camera: '48mp',
    isNew: true

}

//forof :array
//forin : object
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}
const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, '' , mobile[key]);
}