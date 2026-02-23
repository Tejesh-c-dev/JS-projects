
// let obj1={
//  1:"Amazing",
//  2:"Crazy",
//  3:"Fire"
// }
// let obj2={
//  1:"Engine",
//  2:"Food",
//  3:"Garments"
// }
// let obj3={
//  1:"Bros",
//  2:"Limited",
//  3:"Ltd"
// }
// let adjective,shopname,ending;
// let R=Math.random()*100;
// if(R<33){
//     adjective=obj1[1];
// }else if(R<66 && R>33){
//     adjective=obj1[2];
// }else{
//     adjective=obj1[3]
// }
// R=Math.random()*100;
// if(R<33){
//     shopname=obj2[1];
// }else if(R<66 && R>33){
//     shopname=obj2[2];
// }else{
//     shopname=obj2[3]
// }
// R=Math.random()*100;
// if(R<33){
//     ending=obj3[1];
// }else if(R<66 && R>33){
//     ending=obj3[2];
// }else{
//     ending=obj3[3];
// }
// console.log(`${adjective} ${shopname} ${ending}`);

// const adjectives = ["Amazing", "Crazy", "Fire"];
// const shopNames = ["Engine", "Food", "Garments"];
// const endings = ["Bros", "Limited", "Ltd"];

// function getRandomElement(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     return arr[index];
// }

// const adjective = getRandomElement(adjectives);
// const shopName = getRandomElement(shopNames);
// const ending = getRandomElement(endings);

// console.log(`${adjective} ${shopName} ${ending}`);
 
let obj1 = {
    1: "Amazing",
    2: "Crazy",
    3: "Fire"
};
let obj2 = {
    1: "Engine",
    2: "Food",
    3: "Garments"
};
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Ltd"
};

// Helper function to get a random value from an object with numeric keys
function getRandomFromObject(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return obj[randomKey];
}

let adjective = getRandomFromObject(obj1);
let shopname = getRandomFromObject(obj2);
let ending = getRandomFromObject(obj3);

console.log(`${adjective} ${shopname} ${ending}`);
