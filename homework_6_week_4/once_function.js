function calledOnlyOnce(fn) {
    let isCalled = false;

    return function (...args) {
        if (!isCalled) {
            isCalled = true;
            return fn(...args);
        }

        console.log("Function can be run only once")
    };
}

// const calledOnlyOnce = (fn) => {
//     let isCalled = false;45

//     return (...args) => {
//         if (!isCalled) {
//             isCalled = true;
//             return fn(...args);
//         }
//         console.log("Function can be run only once")
//     };
// };


function greetWithName(name) {
    console.log("Hello, " + name + "!");
}

const greetWithNameOnce = calledOnlyOnce(greetWithName);

greetWithNameOnce("Ygor"); // Output: Hello, Ygor!
greetWithNameOnce("John"); // No output
greetWithNameOnce("Jane"); // No output