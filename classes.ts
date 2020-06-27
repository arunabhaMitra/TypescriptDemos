class Stark {
    name: string = "Brandon";
    static castle:string = "Winterfell!";
    saying: string;
}

var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);