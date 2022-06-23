const main = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //傾きのスライダー
    function inputChange1(event){
        msg1.innerText = '傾きは ' + katamukiElement.value + ' です';
    }
    const katamukiElement = document.getElementById('katamuki');
    katamukiElement.addEventListener('input', inputChange1);
        console.log(katamukiElement.value);
    let msg1 = document.getElementById('msg1');
  
    //切片のスライダー
    function inputChange2(event){
        msg2.innerText = '切片は ' +  sextupenElement.value + ' です';
    }
    const sextupenElement = document.getElementById('sextupen');
    sextupenElement.addEventListener('input', inputChange2);
        console.log(sextupenElement.value);
    let msg2 = document.getElementById('msg2');
    // スタートボタンの変数定義
    var hyoujiButton;
        // スタートボタンが押されたかを判定
        hyoujiButton = document.getElementById('hyouji');
        //スタートボタンが押された時の処理
        hyoujiButton.onclick = function() {
            hyouji();
        };

    function hyouji() {
        ctx.clearRect(0, 0, 2000, 3000);
        ctx.beginPath();
        //x軸
        ctx.moveTo(0, 200);
        ctx.lineTo(400, 200);
        //y軸
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 400);
        //原点指定
        ctx.moveTo(200,-sextupen.value * 10 + 200);
        ctx.lineTo(400,-(katamuki.value * 200) + (-sextupen.value * 10 + 200));
        ctx.moveTo(200,-sextupen.value * 10 + 200);
        ctx.lineTo(0, katamuki.value * 200 + (-sextupen.value * 10 + 200));
        ctx.stroke();
    }; 
};

document.addEventListener("DOMContentLoaded", main);
