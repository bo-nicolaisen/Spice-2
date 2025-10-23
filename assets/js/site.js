// write cool JS hwere!!
let myBigImg=document.getElementById("bigImg")
let smallImgz=document.getElementsByClassName("smallImgz")



Array.from(smallImgz).forEach(element => {

    element.addEventListener("click",(event)=>{
        let mySmallImg=event.target.src
        let myBigImgTemp=myBigImg.src

        //switch
        myBigImg.src=mySmallImg
        event.target.src=myBigImgTemp
    })
});