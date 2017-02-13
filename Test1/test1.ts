class Test{

    constructor (public word:string){

    }
    printy() {
        return "<h1>" +  "Hello " + this.word + "</h1>";
    }
}

var t = new Test("Niklas");

document.body.innerHTML = t.printy();