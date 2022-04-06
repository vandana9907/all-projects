const flowerColors ={
    rose: 'red' ,
    marrygold: 'yellow' ,
    lotous: 'pink'
};

const colors = Object.values(flowerColors);
console.log('ojects values');
console.log(colors);

const keys = Object.keys(flowerColors);
console.log('ojects keys');
console.log(keys);

//entries
const movie ={
    name : 'RRR'
    collection : '223cr'
};
const entries = Object.entries(flowerColors);
console.log('ojects entries');



frozenObject.name ='vandana';
frozenObject['age'] ='22';

Object.freeze(frozenObject);
