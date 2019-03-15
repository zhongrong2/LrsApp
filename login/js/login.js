$(function () {
    $(".sumbit").click(function () {
        var phone = $("#phone").val();
        var password = $("#password").val();
        var datas = [phone,password];
        console.log(datas);

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
        //判断密码不为空
        if (password.length == 0){
            $.myToast("请输入密码");
            return false;
        }
        //判断密码格式
        if (password.length < 6){
            $.myToast("请输入6-15位密码");
            return false;
        }

        //发送数据
        $.ajax({
            url:"aaaaaaaaaaa",
            method:"post",
            data:"datas",
            dataType:"json",
            success:function (data) {
                window.location.href="index.html";
            },
            error:function () {

            }
        });

        return true
    })
})