var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
// // function timesTwo(n: number) {
// //     return n*2;
// // }
/// <reference path = "timesTwo.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));
// Command:-  tsc .\modules.ts .\timesTwo.ts --out module.js
