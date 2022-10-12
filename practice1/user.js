export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printName = function(){
        console.log(this.name);
    }

    printAge = function(){
        console.log(this.age);
    }
}
