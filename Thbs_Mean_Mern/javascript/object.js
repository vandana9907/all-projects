let myname;
myname = 'vandana';
let calls_details = 'chinnu'


let personDetails = {
    fname: 'siri',
    lname: 'sasi',
    phone: 0990909,
    'age above': 20,
    address: {
        presentAddr: {
            location: 'nellore',
            pincode: 500  // 1000
        },
        premantAdd: {
            location: 'AP',
            pincode: 300,
            // area: 1020
        }
    }
};
//adding new keys to object
personDetails.address.premantAdd.area = 1020;

//value inside object or nested object
personDetails.address.presentAddr.pincode;
// updaing value of object key
personDetails.address.presentAddr.pincode = 1000;
//personDetails.address.presentAddr['code'] = '1'; // adding 
//delete personDetails.address.presentAddr.pincode;

// personDetails.premantAdd.location
// personDetails.address.premantAdd.location;

console.log(typeof personDetails);
console.log(personDetails);
//accssing value from object
console.log(personDetails['age above']); //
console.log(personDetails['age above']); //
//update value inside object
console.log(personDetails.lname = 'silpa')



console.log(personDetails);
// let classInfo = Object.create({
//     'phone': 88888888,
//     'age': 30
// });
// console.log( typeof classInfo);
// console.log(classInfo);