$(function () {
    getCode();
    //点击刷新
    $("#sendImgCode").click(function () {
        getCode();
    })

    //获取数据
    function getCode(){
        $.ajax({
            url:"data.json",
            method:"get",
            dataType:"json",
            success:function (data) {
                console.log(data.code);
                var code = data.code;
                draw(code);
            }
        })
    }

    // 生成验证码
    function draw(code) {
        var width = $("#sendImgCode").width();
        var height = $("#sendImgCode").height();
        var canvas = document.getElementById("sendImgCode");
        var context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        var sCode = code;


        for (var i = 0; i <= sCode.length-1;i++){
            var deg = Math.random() * 30 * Math.PI/180;
            var txt = sCode[i];
            // console.log(txt);
            var x = 10 + i * 16;
            var y = 20 + Math.random() * 6;
            context.font = "bold 23px 微软雅黑";
            context.translate(x,y);
            context.rotate(deg);
            context.fillStyle = randomColor();
            context.fillText(txt,0,0);
            context.rotate(-deg);
            context.translate(-x,-y);
        }

        //随机线条
        for (var i = 0;i <= 5;i++){
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * width,Math.random() * height);
            context.lineTo(Math.random() * width,Math.random() * height);
            context.stroke();
        }
        //随机圆点
        for (var i = 0;i <= 30;i++){
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * width;
            var y = Math.random() * height;
            context.moveTo(x,y);
            context.lineTo(x + 1,y + 1);
            context.stroke();
        }
        // 随机获取背景色和字体颜色
        function randomColor(){
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);

            if(r < 16){
                r = "0"+r.toString(16);
            }else{
                r = r.toString(16);
            }
            if(g < 16){
                g = "0"+g.toString(16);
            }else{
                g = g.toString(16);
            }
            if(b < 16){
                b = "0"+b.toString(16);
            }else{
                b = b.toString(16);
            }

            return "#"+r+g+b;
        }
    }
})
