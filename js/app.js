function calculate(){
    var a=document.getElementById("weight").value;
    var b=document.getElementById("height").value;
    var bmi=a/((b*b)/10000);
    if(a.length=="" || b.length==""){
        document.getElementById("result").innerHTML=" weight and height can't empty";
        document.getElementById("result").style.color="red";
    }
    else if(bmi<= 18.4){
        document.getElementById("result").innerHTML=" You are underweight.";
        document.getElementById("result").style.color="red";
    }else if(bmi <= 24.9){
        document.getElementById("result").innerHTML=" You are healthy.";
        document.getElementById("result").style.color="green";
    }else if(bmi  <= 29.9){
        document.getElementById("result").innerHTML="  You are over weight.";
        document.getElementById("result").style.color="red";
    }else if(bmi  <= 34.9){
    document.getElementById("result").innerHTML="  You are severely over weight.";
    document.getElementById("result").style.color="red";
}
else if(bmi  <= 39.9){
    document.getElementById("result").innerHTML="  You are obese.";
    document.getElementById("result").style.color="red";
}else {
document.getElementById("result").innerHTML="  You are severely obese.";
document.getElementById("result").style.color="red";

}
}