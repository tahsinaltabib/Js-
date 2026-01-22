//syntex
//property decleration
//method
//this
//object troversing

//js object method--->

/* const myobj= new Object();
console.log(myobj); */

const myobj = {
    //property declared
    //key:value
    name:"Tahisn Al Tabib",
    title:"Student",
    address:{
       village:"Deula",
       thana:"Borhanuddin",
       district:"Bhola",
       fullAdress:function(){
        return `${this.village} --> ${this.thana} --> ${this.district}`
       }
    },
    mentorname:["Nayan", "Sajib", "Rajib", "Tawfiq"],
    department:[{
        deName:"Web & Software",
        totalmember:18,
    },  {
        dpName:"cyber security",
        totalmember:20,
    }]
}
console.log(myobj);
