let obj = {
    name:"thbs",
    sayLater: function () {
        console.log(this)
   console.log(this.getAddress());
    console.log(`${this.name}`);
    },
    getAddress:function () {return 'BNG';}

};
obj.sayLater();
