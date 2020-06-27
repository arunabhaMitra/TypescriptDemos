// var n : Number = 1;
var n : any = 1;
n = 'Robb';

var isWinter : boolean = false;
// isWinter = 123;

var count : Number = 5;
var named : String = "Bran";

// var names : string[] = ["Jon", "Rickon", "Arya", 5];+
var names : any[] = ["Jon", "Rickon", "Arya", 5];

enum Starks {Jon, Bran, Eddard, Catlyn};
var cat : Starks = Starks.Catlyn;

function getName() : string {
    // return 1;
    console.log("Winter is coming!");
    return "Bros";
}

