let imagUrl=["./images/carousel-1.jpg","./images/carousel-2.jpg","./images/carousel-3.jpg"];
let currInd=0;
const changeImg = ()=>{
    console.log("hello");
    let imag = document.getElementById("imag")

    imag.src=imagUrl[currInd];

    currInd = (currInd+1) % imagUrl.length;
}

function onclkl()
{
    let imag= document.getElementById("imag");
    if(currInd==0)currInd=2;
    else currInd--;
    imag.src=imagUrl[currInd];
}

function onclkr()
{
    let imag = document.getElementById("imag");
    currInd = (currInd+1) % imagUrl.length;
    imag.src=imagUrl[currInd];
}

setInterval(changeImg,3000);