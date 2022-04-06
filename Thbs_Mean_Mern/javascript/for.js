let myArr = ['hello', 'how', 'are', 'you'];
//trandiational for loop inside javascript
for (let i = 0; i < myArr.length; i++) {
    console.log(`for loop number ${i} array val at iteration "${myArr[i]}"`)
}

// forEach();
console.log('starting loop with forEach method');
myArr.forEach((ele, index, arr) => {
    console.log(`for loop number ${index} array val at iteration "${ele}"--> ${arr}`)
});

//filtere element base on condition 
let numberList = [200, 40, 15, 51, 22, 7];

let elemeless_5 = numberList.filter((val, indx, arr) => {
    // on what we want filter elemnts
    console.log(val, indx, arr)
    return val > 5;
});
// [20, 15, 7]
console.log(elemeless_5);

//filter array of object
let personList = [
    {name: 'Vandana',skills:['java']},
    {name: 'Chnnu', skills:['java','javascript','html','css']},
    {name: 'Bharath', skills:['java','html','css']},
     {name: 'Siri', skills:['java','html']},
];
let filteredPerson = personList.filter((val, indx) => {
    // console.log(val)
    return val.name.startsWith('C');
    // return val.skill.includes('css'); // true or false 
});

console.log('========Fillter Result=======');
console.log(filteredPerson)

console.log(`Is Array method result ==> ${Array.isArray({})}`);


/*
 ===== Find going exit loop as soon as condition retuns true====
 */
 const array1 = [5, 12, 8, 130, 44];
 const found = array1.find((element, index) => {
     console.log(element, index)
     return element > 10; //true
 });
 console.log(found);


 /*
 ====findIndex going retrun index of found element --> conditon satified ====
 */

const myArray1 = [5, 12, 8, 130, 44];
const myFound1 = myArray1.findIndex((element, index) => {
    console.log(element, index)
    return element > 100; //true
});

console.log(` condition satified element index is --> ${myFound1}`);

 

/*
 * IndexOf()
 * if element found going return index of ele or 
 * if not found return -1 as result
 */

 const myArray2 = [5, 12, 8, 130, 44];
 console.log(myArray2.indexOf(3));
 
 
 console.log(myArray2.join("*"));



 
 /* MAP is used to transform array or modifed array the way you want*/
 
 
 
let personMap = [
    {name: 'Vandana',skills:['java']},
    {name: 'Chnnu', skills:['java','javascript','html','css']},
    {name: 'Bharath', skills:['java','html','css']},
     {name: 'Siri', skills:['java','html']},
];

let mappedPerson = personMap.map((val, inx, arr) => {
    val.name = "Hello " + val.name; //modifed value 
    return val;
});
console.log(personMap);

console.log(mappedPerson);

 