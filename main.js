document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    
    document.getElementById("result").innerHTML = "SUM :" +sum;
});
function myalert(){
    alert("ศวัตดี ณะฅลัป")
}

const img = document.createElement("img");
img.src="img/pic.png"
img.style.width="200px"

document.getElementById("myDiv").appendChild(img);