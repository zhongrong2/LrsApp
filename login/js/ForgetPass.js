$(function () {
    $(".sumbit").click(function () {
        var phone = $("#phone").val();
        var ImgCode = $("#ImgCode").val();
        var code = $("#code").val();
        var datas = [phone,ImgCode,code];
        console.log(phone);

        var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则
        // 判断手机号不为空
        if (phone.length == 0){
            $.myToast("请输入手机号码");
            return false;
        }
        // 判断手机格式
        if (!phoneReg.test(phone)) {
            $.myToast("请输入有效手机号码");
            return false;
        }
        //判断图形验证码不为空
        if (ImgCode.length == 0){
            $.myToast("请输入图形验证码");
            return false;
        }
        //判断手机验证码不为空
        if (code.length == 0){
            $.myToast("请输入手机验证码");
            return false;
        }

        //发送数据
        $.ajax({
            url:"aaaaaaaaaaa",
            method:"post",
            data:"datas",
            dataType:"json",
            success:function (data) {
                window.location.href="ChangePass.html";
            },
            error:function () {

            }
        });
        window.location.href="ChangePass.html";
        return true
    })
})