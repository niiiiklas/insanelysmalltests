var Test = (function () {
    function Test(word) {
        this.word = word;
    }
    Test.prototype.printy = function () {
        return "<h1>" + "Hello " + this.word + "</h1>";
    };
    return Test;
})();
var t = new Test("Niklas");
document.body.innerHTML = t.printy();
