var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 1] = "Apple";
    Fruit[Fruit["Mango"] = 2] = "Mango";
    Fruit[Fruit["PineApple"] = 3] = "PineApple";
    Fruit[Fruit["Banana"] = 4] = "Banana";
    Fruit[Fruit["Grapes"] = 5] = "Grapes";
})(Fruit || (Fruit = {}));
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
})(Days || (Days = {}));
var t = Fruit.Banana;
console.log(t);
var u = Days.Monday;
console.log(u);
