//asynchronous in javascript function (callback)

function myFunction(callback) {
    setTimeout(() => {
        const data = { name: "soham", age: 21 };
        callback (data)
    },3000)
}
myFunction((data) => {
    console.log("Data" ,data);
})

console.log("after calling function");
