class generics <T> {
    private arr : T[] = [];

    public insertData(data : T){
        this.arr.push(data);
    }

    public display() {
        return this.arr;
    }
}

var obj = new generics<number>();
// OR
// var obj = new generics();

obj.insertData(2);
obj.insertData(4);
obj.insertData(1);

console.log(obj.display());
