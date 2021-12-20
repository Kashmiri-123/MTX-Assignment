var success = function (msg) {
    console.log("Success msg " + msg);
};
var failure = function (msg) {
    console.log("Failure msg " + msg);
};
var promise = function (age) {
    return new Promise(function (resolve, reject) {
        if (age >= 18) {
            resolve("you are eligible");
        }
        else {
            reject("you are not eligible");
        }
    });
};
promise(20).then((function (message) {
    console.log("Success " + message);
}))["catch"](function (message) {
    console.log("Failure " + message);
});
