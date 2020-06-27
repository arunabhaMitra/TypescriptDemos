var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Brandon";
    }
    Stark.castle = "Winterfell!";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);
