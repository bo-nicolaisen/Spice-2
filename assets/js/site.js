// write cool JS hwere!!
let myBigImg=document.getElementById("bigImg")

let smallImgz=document.getElementsByClassName("smallImgz")
console.log(smallImgz)

Array.from(smallImgz).forEach(element => {
    console.log(element)
    element.addEventListner("click",(event)=>{
        alert("test")
    })
});