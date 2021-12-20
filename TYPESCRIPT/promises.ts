let success = (msg) => {
    console.log("Success msg " + msg);
}

let failure = (msg) => {
    console.log("Failure msg " + msg);
}

const promise = age => {
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve("you are eligible");
        }
        else{
            reject("you are not eligible");
        }
    })
}

promise(20).then((message => {
    console.log("Success " + message);
}))
    .catch((message) => {
        console.log("Failure " + message);
    })