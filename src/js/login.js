require(['config'],function(){
    require(['jquery',"common"],function($){
        let $phone = $("#phone");
        let $password = $("#password");
        let $yanzhen = $(".yanzhen");
        let $ma = $(".ma");
        let $huan = $(".huan")
        console.log(666)
        $('.btn').on('click',function(){
            if($phone.val() === ""){
                alert("账号不能为空");
                return false;
            }else if($password.val() === ""){
                alert("密码不能为空");
                return false;
            }else if($yanzhen.val() != $ma.text()){
                alert("验证码不正确");
                return false;
            };
            // if($(".cbox").checked){
            //     //设置有效期
            //     var d = new Date();
            //     d.setDate(d.getDate());
            //     //存储cookie
            //     document.cookie = "username="+username+"; expires="+d.toUTCString();
            //     document.cookie = "password="+password+"; expires="+d.toUTCString();
            // }
                
            // //自动登陆
            // var cookies = document.cookie;
            // if(cookies.length>0){
            //     cookies = cookies.split("; ");
            //     for(var i=0;i<cookies.length;i++){
            //         var attr = cookies[i].split("=");
            //         if(attr[0] === "username" || attr[0] === "password"){
            //             location.href = "../index.html"
            //         }
            //     }
            // }
            $.ajax({
                url:'../api/login.php',
                data:{
                    phone:$phone.val(),
                    password:$password.val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = '../index.html';
                    }else if(data === 'fail'){
                        alert("账号或密码错误");
                        return false;
                    }
                }
            })
        });
        $ma[0].innerHTML = randomNumber(1000,9999);
        $huan.on("click",function(){
            $ma[0].innerHTML = randomNumber(1000,9999);
        });
        $yanzhen.on("blur",function(){
            if($yanzhen.val().trim() === ""){
                $(".kong").css({display:"block"});
                return false;
            }else if($yanzhen.val() != $ma.text()){
                $(".kong").text("验证码不正确");
                return false;
            }
        }).on("input",function(){
            if($yanzhen.val() != $ma.text()){
                $(".kong").text("验证码不正确");
                return false;
            }else{
                $(".kong").text("")
            }
        });
    })
});

// window.onload = function(){
//             var username = document.getElementById("phone");
//             var password = document.getElementById("password");
//             var check = document.getElementsByClassName("check")[0];
//             var yanzhen = document.getElementsByClassName("yanzhen")[0];
//             var kong = document.getElementsByClassName("kong")[0];
//             var btnSubmit = document.getElementsByClassName("btn")[0];
//             btnSubmit.onclick = function(e){
//                 //阻止浏览器默认行为
//                 e.preventDefault();
//                 var _username = username.value.trim();
//                 var _password = password.value.trim();
//                 var _yanzhen = yanzhen.value.trim();
//                 if(_username === ""){
//                     alert("账号不能为空");
//                     return;
//                 }else if(_password === ""){
//                     alert("密码不能为空");
//                     return;
//                 }else if(_yanzhen === ""){
//                     alert("验证码不正确")
//                     return false;
//                 }
                
//                 if(check.checked){
//                     //设置有效期
//                     var d = new Date();
//                     d.setDate(d.getDate()+7);
//                     //存储cookie
//                     document.cookie = "username="+username+"; expires="+d.toUTCString();
//                     document.cookie = "password="+password+"; expires="+d.toUTCString();
//                 }
//                 location.href = "../index.html";
//             }
//             //自动登陆
//             var cookies = document.cookie;
//             if(cookies.length>0){
//                 cookies = cookies.split("; ");
//                 for(var i=0;i<cookies.length;i++){
//                     var attr = cookies[i].split("=");
//                     if(attr[0] === "username" || attr[0] === "password"){
//                         location.href = "../index.html"
//                     }
//                 }
//             }
            
// }
