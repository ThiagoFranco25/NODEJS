var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.HelloWorld = function () {
        return "Hello World! 2DS2";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById("texto").textContent = p.HelloWorld();
