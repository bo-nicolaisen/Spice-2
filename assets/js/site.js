// write cool JS hwere!!
let myBigImg=document.getElementById("bigImg")

let smallImgz=document.getElementsByClassName("smallImgz")
console.log("test")
smallImgz.array.forEach(element => {
    console.log(element)
    element.addEventListner("click",(event)=>{
        alert("test")
    })
});