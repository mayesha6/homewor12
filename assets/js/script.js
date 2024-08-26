const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const contentOne = document.getElementById("content-one")
const contentTwo = document.getElementById("content-two")
const contentThree = document.getElementById("content-three")

console.log(one)
one.addEventListener("click", function(){
    contentOne.classList.add("content-block")
    contentTwo.classList.remove("content-block")
    contentThree.classList.remove("content-block")
})
console.log(two)
two.addEventListener("click", function(){
    contentTwo.classList.add("content-block")
    contentOne.classList.remove("content-block")
    contentThree.classList.remove("content-block")
    contentOne.classList.remove("active")
})
three.addEventListener("click", function(){
    contentThree.classList.add("content-block")
    contentOne.classList.remove("content-block")
    contentTwo.classList.remove("content-block")
    contentOne.classList.remove("content-block")
})
