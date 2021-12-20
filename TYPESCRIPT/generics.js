var generics = /** @class */ (function () {
    function generics() {
        this.arr = [];
    }
    generics.prototype.insertData = function (data) {
        this.arr.push(data);
    };
    generics.prototype.display = function () {
        return this.arr;
    };
    return generics;
}());
var obj = new generics();
obj.insertData(2);
obj.insertData(4);
obj.insertData(1);
console.log(obj.display());
