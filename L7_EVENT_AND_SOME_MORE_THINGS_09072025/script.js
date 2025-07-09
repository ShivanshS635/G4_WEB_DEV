// // const grandParent = document.getElementById("grandparent");
// // const parent = document.getElementById("parent");
// // const child = document.getElementById("child");

// //this will give the output in the console in the order of the event bubbling like when clicked on the child it will first log the grandParent then parent and then child
// // grandParent.addEventListener("click" , () => {
// //     console.log("This Is Red Block")
// // })

// // parent.addEventListener("click" , () => {
// //     console.log("This Is Blue Block")
// // })

// // child.addEventListener("click" , () => {
// //     console.log("This Is Green Block")
// // })

// //if you want to stop the event bubbling then you can use stopPropagation() method

// // grandParent.addEventListener("click" , (e) => {
// //     console.log("This Is Red Block")
// //     e.stopPropagation(); // This will stop the event from bubbling up to parent and grandParent
// // })

// // parent.addEventListener("click" , (e) => {
// //     console.log("This Is Blue Block")
// //     e.stopPropagation();
// // })

// // child.addEventListener("click" , (e) => {
// //     console.log("This Is Green Block")
// //     e.stopPropagation();
// // })


// const productList = document.getElementById("productList");

// productList.addEventListener("click", (e) => {
//     //event delegation: check if the clicked element is a list item
//     //event delegation allows you to add a single event listener to a parent element instead of multiple listeners on child elements
//     //this is useful for dynamically added elements
//     //it helps in improving performance and reducing memory usage
//     if (e.target.tagName === "LI") {
//         console.log("Clicked on a product:", e.target.textContent);
//     }
// });

//Debouncing In JS Example
const textBox = document.getElementById("textBox");

//this is not good according to data hiding
// let thisTime;
// textBox.addEventListener("input" , (e) => {
//     clearTimeout(thisTime);
//     thisTime = setTimeout(() => {
//         console.log("Typed : " , e.target.value);
//     }, 2000);
// })

function searchFunction() {
    let thisTime;
    return function (event) {
        clearTimeout(thisTime);
        thisTime = setTimeout(() => {
            console.log("Searching for:", event.target.value);
        }, 1000);
    };
}

textBox.addEventListener("input", searchFunction());