require(['config'],function(){
    require(['jquery'],function($){
        // document.addEventListener("DOMContentLoaded",function(){
        //         let username = document.querySelector("#username");
        //         let group = username.parentNode;
        //         let txt = username.nextElementSibling;
        //         let password = document.querySelector("#password");
        //         let btnReg = document.querySelector(".btnReg");
        //         username.onblur = function(){
        //             let _username = username.value;
        //             ajax({
        //                 url:"../api/reg.php",
        //                 data:{username:_username},
        //                 success:function(data){
        //                     if(data === "success"){
        //                         group.classList.remove("has-error");
        //                         group.classList.add("has-success");
        //                         txt.innerHTML = "";
        //                     }else{
        //                         group.classList.remove("has-success");
        //                         group.classList.add("has-error");
        //                         txt.innerHTML = _username + " 已被注册";
        //                     }
        //                 }
        //             })
        //         }

        //         btnReg.onclick = function(){
        //             let _username = username.value;
        //             let _password = password.value;
        //             ajax({
        //                 url:"../api/reg.php",
        //                 data:{
        //                     username:_username,
        //                     password:_password,
        //                     type:"reg"
        //                 },
        //                 success:function(data){
        //                     console.log(data);
        //                     if(data === "success"){
        //                         alert("注册成功");
        //                         password.value = "";
        //                     }
        //                 }
        //             })
        //         }
        // })
        let $phone = $("#phone");
        let $word = $("#word");
        let $pword = $("#pword");
        let $kong = $(".kong");
        let $geshi = $(".geshi");
        let $zifu = $(".zifu");
        let $gou = $(".gou");
        let $gou1 = $(".gou1");
        let $gou2 = $(".gou2");
        let $mi = $(".mi");
        let $mi1 = $(".mi1");
        let $mi2 = $(".mi2");
        let $cbox = $(".cbox");
        let $btn = $(".btn");
        let $xuan = $(".xuan")
        $phone.focus().css({border:"1px solid blue"});
        $phone.on("focus",function(){
            $(this).css({border:"1px solid blue"});
            if($(this).val() != ""){
                 $kong.css({display:"none"});
                 $(this).css({border:"1px solid #ddd"});
                 $geshi.css({display:"none"});
                 $gou.css({display:"none"});
            }
        }).on("blur",function(){
            if($(this).val().trim().length === 0){
                $kong.css({display:"block"});
                $(this).css({border:"1px solid #FFAA00"});
                return false;
            }else if(!/^1[3-8]\d{9}$/i.test($(this).val())){
                $(this).css({border:"1px solid red"});
                $geshi.css({display:"block"});
                return false;
            }else{
                $geshi.css({display:"none"}); 
            };
            if(/^1[3-8]\d{9}$/i.test($(this).val())){
                $gou.css({display:"block"});
            }
        });
        
        $word.on("focus",function(){
            $zifu.css({display:"block"});
            $(this).css({border:"1px solid blue"});
            $mi.css({display:"none"})
            // $zifu.css({color:"#fff"})
        }).on("blur",function(){
            let $this = $(this).val();
            $zifu.css({display:"none"});
            $(this).css({border:"1px solid red"});
            if($this.trim() === ""){
                $mi.css({display:"block"}).text("密码不能为空");
                return false;
            }else if(!/^[a-zA-Z0-9\x21-\x7e]{6,20}$/ig.test($this)){
                $mi.css({display:"block"}).text("密码只能为6-20位字符");
                return false;
            }else{
                $(this).css({border:"1px solid #ddd"});
                $gou1.css({display:"block"});
            }
            // switch(true){
            //     case $this.val().trim() === "":
            //         $mi.css({display:"block"}).text("密码不能为空");
            //         break;
            //     case !/^[\x21-\x7E]{6,20}$/ig.test($this.val()):
            //         $mi.css({display:"block"}).text("密码只能为6-20位字符");
            //         break;
            //     case !/^\d{6-20}$/g.test($this.val()):
            //         $mi.css({display:"block"}).text("密码不能全为数字");
            //         break;
            //     case !/^[a-z]{6-20}$/ig.test($this.val()):
            //         $mi.css({display:"block"}).text("密码不能全为字母，请包含至少1个数字或符号");
            //         break;
            // }
        });
        // $pword.attr("disabled","disabled");
        // if($phone.val() === true && $word.val() === true){
        //     $pword.attr("disabled",false);
        // }
        $pword.on("focus",function(){
            $(this).css({border:"1px solid blue"});
            $mi1.css({display:"block"});
            $mi2.css({display:"none"});
        }).on("blur",function(){
            $mi1.css({display:"none"});
            if($word.val() != $pword.val()){
                $mi2.css({display:"block"});
                $(this).css({border:"1px solid red"});
                return false;
            }else if($(this).val() != ""){
                $(this).css({border:"1px solid #ddd"});
                $gou2.css({display:"block"});
                return false;
            }
        });  
        $cbox.on("click",function(){
            if($(this).is(":checked") === false){
                $xuan.css({display:"block"});
            }else if($(this).is(":checked") === true){
                $xuan.css({display:"none"});
            }
        })
        // var dd = (cbox.on("mousedown",function(){
        //     if(/^1[3-8]\d{9}$/i.test($phone.val()) && /^[a-zA-Z0-9\x21-\x7e]{6,20}$/ig.test($word.val()) && cbox.checked === false){
        //         btn.style.color = '#333';
        //         btn.disabled = false;
        //     }else{
        //         btn.disabled = true; 
        //     }   
        // })();
        
                    
        $('.btn').on('click',function(){
            $phoneVal = $('#phone').val().trim();
            console.log($phoneVal);
            if($phoneVal === ""){
                alert("账号不能为空");
                return false;
            }else if($word.val() === ""){
                alert("密码不能为空");
                return false;
            }else if($pword.val() === ""){
                alert("确认密码不能为空");
                return false;
            }else if($cbox.is(":checked") === false){
                alert("请勾选1药网服务协议");
                return false;
            }
            $.ajax({
                url:'../api/reg.php',
                data:{
                    phone:$phoneVal,
                    password:$('#word').val(),
                    type:"reg"
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = 'login.html';
                    }else if(data === 'fail'){
                        alert($phoneVal+"已被注册");
                        return false;
                    }
                }
            })
        })
    })
});