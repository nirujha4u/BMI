const cal=document.getElementById("calc")
const result=document.getElementById("result")
const info=document.getElementById("info")
const bmi=document.getElementById("bmi")

cal.addEventListener("click", function(){
    const weight=parseInt(document.getElementById("weight").value)
    const height=parseInt(document.getElementById("height").value)
    let test=result.innerHTML=Math.round((weight/((height*2)*100))*10000);

    result.innerHTML=`Your BMI is ${test}`;
    result.style.display="block";

    if(test<=18.5){
        info.innerHTML="Under weight";
    }
    else if(test>18.5 && test<=24.9){
        info.innerHTML="Good Health";
    }
    else{
        info.innerHTML="Over weight";
    }
})

