let averageDiv = document.getElementById("result");

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let num3 = parseInt(document.getElementById("num3").value);
        let averageNum = (num1 + num2 + num3)/3;
     
        averageDiv.textContent = (Math.round(averageNum * 100) / 100).toFixed(2);
    });
});

