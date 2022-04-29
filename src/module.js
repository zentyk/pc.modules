export default class Nakama {
    constructor(greeting) {
        this.greeting = greeting;
        
        console.log("module loaded");
    }

    Greet = function () {
        console.log("Hello "+ this.greeting + "!");
    }
}