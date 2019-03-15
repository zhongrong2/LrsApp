$(function () {
    // 显示隐藏密码
    $(".eyeBox").each(function () {
        $(this).click(function () {
            var show = $(this).attr("data-show");
            console.log(show);
            if (show == "1"){
                // 点击显示
                $(this).attr("data-show","2");
                $(this).children(".eyeIcon").html("&#xe601;");
                $(this).prev().attr("type","text");//获取当前元素的上一个兄弟元素
            }
            else if (show == "2"){
                // 点击隐藏
                $(this).attr("data-show","1");
                $(this).children(".eyeIcon").html("&#xe680;");
                $(this).prev().attr("type","password");
            }
        })
    })
    // 判断提交数据
    $(".sumbit").click(function () {
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();
        if (pass1.length == 0){
            $.myToast("请输入密码");
            return false;
        }
        if (pass1.length < 6){
            $.myToast("请输入6-15位密码");
            return false;
        }
        if (pass2.length == 0){
            $.myToast("请确认密码");
            return false;
        }
        if (pass1 !== pass2){
            $.myToast("两次输入密码不一致");
            return false;
        }
        window.location.href='login.html';
        $.ajax({
            url:"aaaaa",
            method:"post",
            data:"pass1",
            dataType:"json",
            success:function () {
                window.location.href='login.html';
            }
        })
        return true;
    })
})
