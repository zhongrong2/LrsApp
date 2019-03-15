$(function () {
    // 显示隐藏密码
    $(".eyeBox").click(function () {
        var show = $(this).attr("data-show");
        if (show == "1"){
            // 点击显示
            $(this).attr("data-show","2");
            $(".eyeIcon").html("&#xe601;");
            $(".password").attr("type","text");
        }
        else if (show == "2"){
            // 点击隐藏
            $(this).attr("data-show","1");
            $(".eyeIcon").html("&#xe680;");
            $(".password").attr("type","password");
        }
    });
    
    // 注册提交
    $(".sumbit").click(function () {
        var phone = $('#phone').val();
        var ImgCode = $('#ImgCode').val();
        var code = $("#code").val();
        var password = $("#password").val();
        var datas = [phone,ImgCode,code,password];
        console.log(phone,ImgCode,code,password);

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
        //判断密码不为空
        if (password.length == 0){
            $.myToast("请输入密码");
            return false;
        }
        // 判断密码格式
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
                    window.location.href="login.html";
                },
                error:function () {

                }
            });

        return true;

    })
})