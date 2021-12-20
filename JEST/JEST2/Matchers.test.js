var matchers = require("./Matchers");

describe("Matchers Suite", () => {
    test("Comparing objects with toBe() and toEqual()", () => {
        var empObj = {"id":102, "name":"Kashmiri", "dept":"CS", "designation":"FSD"}
        //expect(matchers.returnObject()).toBe(empObj) //will not be equal

        expect(matchers.returnObject()).toEqual(empObj);//will be equal
    })

    test("using matcher .not.tobeNull with an object", () => {
        var embObj = matchers.returnObject();
        console.log("Returned data from the function is " + JSON.stringify(embObj));
        expect(embObj).not.toBeNull();
    })

    test("Use the Matchers toBeTruthy", () => {
        var bData = true;
        // var bData = 90;
        expect(bData).toBeTruthy();

        var obj = matchers.returnObject();
        expect(obj).toBeTruthy(); //for obj the obj should contain value or point to a memory location
    })

    test("using matcher toMatch()",  () => {
        expect(matchers.returnUrl()).toMatch(/google/);
    })

    test("using matcher toContain()", () => {
        var newStr = 'Chandana';
        // expect(matchers.returnArrNames()).toContain(newStr);
        expect(matchers.returnArrNames()).toContain("Manu");
    })

    //setup nd tear down. Executed before and afer every test case
    beforeEach(() => {
        console.log("In BeforeEach()......")
    })

    afterEach(() => {
        console.log("In afterEach()....")
    })

    //etup nd tear down. executed once only 
    beforeAll(() => {
        console.log("In BeforeAll()")
    })

    afterAll(() => {
        console.log("In AfterAll()")
    })
})