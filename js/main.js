$(document).ready(function () {

    let op = "";
    let setResult = false;
    let setPoint = false;
    let result = "";
    let number1, number2;

    $(".one").click(function () {

        var num = $(".number").val() + 1;
        $(".number").val(num);

    });

    $(".two").click(function () {

        var num = $(".number").val() + 2;
        $(".number").val(num);

    });

    $(".three").click(function () {

        var num = $(".number").val() + 3;
        $(".number").val(num);

    });

    $(".four").click(function () {

        var num = $(".number").val() + 4;
        $(".number").val(num);

    });

    $(".five").click(function () {

        var num = $(".number").val() + 5;
        $(".number").val(num);

    });

    $(".six").click(function () {

        var num = $(".number").val() + 6;
        $(".number").val(num);

    });

    $(".seven").click(function () {

        var num = $(".number").val() + 7;
        $(".number").val(num);

    });

    $(".eight").click(function () {

        var num = $(".number").val() + 8;
        $(".number").val(num);

    });

    $(".nine").click(function () {

        var num = $(".number").val() + 9;
        $(".number").val(num);

    });

    $(".zero").click(function () {

        var num = $(".number").val() + 0;
        $(".number").val(num);

    });

    $(".clear").click(function () {

        $(".number").val(null);
        setPoint = false;
        setResult = false;
        number1 = 0;
        number2 = 0;

    });

    $(".total").on("click", function (e) {

        number1 = $(".number").val();
        number1 = parseFloat(number1);
        $(".number").val(null);
        op = "+";
        console.log(number1);

    });

    $(".submission").on("click", function (e) {

        number1 = $(".number").val();
        number1 = parseFloat(number1);
        $(".number").val(null);
        op = "-";

    });

    $(".multiplication").on("click", function (e) {

        number1 = $(".number").val();
        number1 = parseFloat(number1);
        $(".number").val(null);
        op = "*";

    });

    $(".division").on("click", function (e) {

        number1 = $(".number").val();
        number1 = parseFloat(number1);
        $(".number").val(null);
        op = "/";

    });

    $(".equal").click(function (e) {


        number2 = $(".number").val();
        number2 = parseFloat(number2);



        switch (op) {
            case "+":
                result = number1 + number2;
                op = "";
                break;
            case "-":
                result = number1 - number2;
                op = "";
                break;
            case "/":
                result = number1 / number2;
                op = "";
                break;
            case "*":
                result = number1 * number2;
                op = "";
                break;
        }
        $(".number").val(result);
        setResult = true;

    });

    $(".decimal").click(function () {

        if (setPoint == false) {
            var num = $(".number").val() + ".";
            $(".number").val(num);
            setPoint = true;
        }


    });

    $(".backspace").click(function () {

        let len = document.querySelector(".number").value.length;
        let lastDigit = document.querySelector(".number").value.substr(len - 1, len);
        if (lastDigit == ".") {
            setPoint = false;
        }

        if (len > 1) {

            document.querySelector(".number").value = document.querySelector(".number").value.substr(0, len - 1);
        } else {
            document.querySelector(".number").value = "";
        }

    });

});

