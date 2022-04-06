let myName =new Promise((resolove,reject) => {
    setTimeout(() => {
        resolove('chinnu');
        reject ('chinnu');
    }, 5000);
    });

    myName.then(
        (sucess) => {
            console . log(`i am good in promises ${sucess}`);
        },
        (error) => {
            console.log(`i am very good in promises ${falied}`);
        
        });