const students = [
    {id: 21, name: "tanvir"},
    {id: 20, name: "galib"},
    {id: 19, name: "jabir"},
    {id: 18, name: "ashraf"}
];
// const element1 = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     element1.push(element.id);       
// };
// console.log(element1);

const name = students.map(s => s.name);
console.log(name);
