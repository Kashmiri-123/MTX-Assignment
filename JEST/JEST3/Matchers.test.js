var matchers = require("./Matchers");

describe("Matchers Suite", () => {

    //question1
    test("Checking the sub function", () => {
        expect(matchers.returnSub(9,6)).toEqual(3);
    })

    test("Checking the mul function", () => {
        expect(matchers.returnMul(3,6)).toEqual(18);
    })

    test("Checking the div function", () => {
        expect(matchers.returnDiv(18,6)).toEqual(3);
    })


    //question2
    test("Largest of 3 numbers", () => {
        expect(matchers.returnLargest(8,0,2)).toEqual(8);
    })

    test("Checking factorial", () => {
        expect(matchers.returnFactorial(3)).toEqual(6);
    })

    test("Checking even number", () => {
        expect(matchers.returnCheckEven(8)).toBeTruthy();
    })

    test("Checking largest number in array", () => {
        expect(matchers.returnLargestofArray()).toEqual(7);
    })

    //question3
    test("Checking library book function", () => {
        var Obj = matchers.returnBookDataById(102);
        console.log("Returned data from the function is " + JSON.stringify(Obj));
        expect(Obj).not.toBeNull();

        var Obj2 = matchers.returnBookDataById(100);
        console.log("Returned data from the function is " + JSON.stringify(Obj2));
        expect(Obj2).toBeNull();
    })

    // question5
    test("Checking login function", () => {
        var Obj = matchers.Login("123", "abc");
        expect(Obj).toEqual("Valid User");
    })

})