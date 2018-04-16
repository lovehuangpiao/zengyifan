jQuery(function($){

        //1、头部
        
        //地址栏
        let $dizhi = $(".dizhi");
        //创建小箭头
        $dizhi.append("<i class='bottom'></i>");
        $dizhi.on("mouseenter",function(){
            $(this).attr("style","background:#fff").children("i").removeClass("bottom").addClass("top");
            $(this).children("ul").css({display:"block",background:"#fff"});
        }).on("mouseleave",function(){
            $(this).attr("style","background:#F1F1F1").children("i").removeClass("top").addClass("bottom");
            $(this).children("ul").css({display:"none"});
        });

        let $pro = $dizhi.children("ul");
        let $province = $(".province");
        $pro.on("mouseenter","span",function(){
            $(this).css({color:"blue",textDecoration:"underline"});
        }).on("mouseleave","span",function(){
            $(this).css({color:"#5E5E5E",textDecoration:"none"})
        }).on("click","span",function(){
            $province[0].innerText = $(this).text();
            $pro.css({display:"none"})
        })
        //登录注册
        let $ul = $(".ul");
        let $li1 = $(".li1");
        $li1.children(".yiyao").append("<i class='bottom1'></i>");
        $li1.on("mouseenter",function(){
            console.log($(this));
            $(this).closest("li").attr("style","background:#fff").find("i").removeClass("bottom1").addClass("top1");
        }).on("mouseleave",function(){
            $(this).closest("li").attr("style","background:#F1F1F1").find("i").removeClass("top1").addClass("bottom1");
        });

        $ul.on("mouseenter","a",function(){
            $(this).find("span").css({color:"blue",textDecoration:"underline"});
        }).on("mouseleave","a",function(){
            $(this).find("span").css({color:"#5E5E5E",textDecoration:"none"});
        })

        // //2、搜索
        let $cast = $(".cast");
        let $shousuo = $(".shousuo");
        let $datalist = $(".datalist");
        window.getData = function(data){
            console.log(data);
            $datalist[0].innerHTML= data.s.map(item=>{
                return `<li class="goods"><a href="#">${item}</a></li>`
            }).join("");
            $datalist.css({display:"block",background:"#fff"})
        }
        let timer;
        $cast.on("input",function(){
            clearTimeout(timer);
            let $_cast = $cast.val();
            timer = setTimeout(()=>{
                let $script = $("<script/>");
                $script.attr({"src":"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=getData&wd="+$_cast});
                $("body").append($script);
            },1000)
        })
        $datalist.on("mouseenter","a",function(){
            $(this).closest("li").css({background:"#F1F1F1"})
        }).on("mouseleave","a",function(){
            $(this).closest("li").css({background:"#fff"})
        }).on("click","a",function(){
            $cast[0].value = $(this).closest("li").text();
            $datalist.css({display:"none"});
        })
        // $shousuo.on("click",function(){
        //     let $_cast = $cast.val();
        //     let $script = $("<script/>");
        //         $script.attr({"src":"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=getData&wd="+$_cast});
        //         $("body").append($script);
        // })
        
        //3、导航
        let $lis = $(".lis");
        //创建小箭头
        $lis.append("<i class='bottom2'></i>");
        $lis.on("mouseenter",function(){
            $(this).find("i").removeClass("bottom2").addClass("top2");
            $(this).children("ul").css({display:"block"});
        }).on("mouseleave",function(){
            $(this).children("i").removeClass("top2").addClass("bottom2");
            $(this).children("ul").css({display:"none"});
        });
        //导航栏
        let $yong = $(".yong");
        $yong.on("mouseenter","li",function(){
            $(this).css({background:"#fff"}).find("div").css({display:"block"});
            $(this).find("span").css({color:"#5E5E5E"})
        }).on("mouseleave","li",function(){
            $(this).css({background:"#314349"}).find("div").css({display:"none"});
            $(this).find("span").css({color:"#fff"})
        })
        //4、切换
        let $pingpl = $(".pingpl");
        let $ben = $(".ben");
        let $lianl = $(".lianl");
        let $zhongyi = $(".zhongyi");
        $pingpl.on("mouseenter",function(){
            $(this).css({background:"#fff"});
            $ben.css({display:"block"});
            $zhongyi.css({display:"none"});
            $lianl.css({background:"#F8F8F8"})
        });
        $lianl.on("mouseenter",function(){
            $(this).css({background:"#fff"});
            $zhongyi.css({display:"block"});
            $ben.css({display:"none"});
            $pingpl.css({background:"#F8F8F8"})
        })
        //5、返回顶部
        let $fanhui = $(".fanhui");
        $fanhui.on("mouseenter","li",function(){
            $(this).find("img").css({display:"none"});
            $(this).css({background:"red"}).find("span").css({display:"block",color:"#fff"});
        }).on("mouseleave","li",function(){
            $(this).find("img").css({display:"block"});
            $(this).css({background:"#fff"}).find("span").css({display:"none"});
        })
        let $spp4 = $(".spp4");
        $spp4.on("click",function(){
            $(this).parents("html").animate({scrollTop: 0},'800');
        })
        //6、楼梯
        // 获取滚动条滚动过的距离
        var $louti = $(".louti")
        var $height = $('.jiulou').outerHeight(true);
        $(window).scroll(function(){
            var $scrollTop = $(window).scrollTop();
            if($scrollTop>=940){
                $louti.fadeIn();
            }else{
                $louti.fadeOut();
            }
            var $i = Math.floor(($scrollTop-454)/$height);
            var $idx = $i>0 ? $i : null;
            var $li = $louti.find('li');
            $li.find('span').css({'display':'block'})
            $li.find('i').css({'display':'none'});
            $li.eq($idx).find('span').css({'display':'none'});
            $li.eq($idx).find('i').css({'display':'block'})
        })
        $louti.on('mouseenter','li',function(){
            $(this).find('span').css({'display':'none'});
            $(this).find('i').css({'display':'block',background:"blue",color:"#fff"});
        }).on('mouseleave','li',function(){
            $(this).find('span').css({'display':'block'});
            $(this).find('i').css({'display':'none'});
        })
        $louti.on('click','li',function(e){
            var $idx = $(this).index();
            var $scrollTop = $height*$idx+454;
            $('html,body').stop().animate({scrollTop:$scrollTop});
        });
})

   //3、轮播图
document.addEventListener("DOMContentLoaded",()=>{
            let focus = document.querySelector(".focus");
            let ul = focus.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            focus.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            focus.onmouseenter = function(){
                clearInterval(timer);
            }
            focus.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            focus.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu1 = document.querySelector(".lunbotu1");
            let ul = lunbotu1.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu1.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu1.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu1.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu1.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu2 = document.querySelector(".lunbotu2");
            let ul = lunbotu2.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu2.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu2.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu2.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu2.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu4 = document.querySelector(".lunbotu4");
            let ul = lunbotu4.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu4.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu4.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu4.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu4.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu3 = document.querySelector(".lunbotu3");
            let ul = lunbotu3.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu3.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu3.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu3.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu3.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu5 = document.querySelector(".lunbotu5");
            let ul = lunbotu5.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu5.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu5.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu5.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu5.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu6 = document.querySelector(".lunbotu6");
            let ul = lunbotu6.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu6.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu6.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu6.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu6.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu7 = document.querySelector(".lunbotu7");
            let ul = lunbotu7.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu7.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu7.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu7.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu7.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu8 = document.querySelector(".lunbotu8");
            let ul = lunbotu8.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu8.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu8.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu8.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu8.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu9 = document.querySelector(".lunbotu9");
            let ul = lunbotu9.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu9.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu9.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu9.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu9.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})
document.addEventListener("DOMContentLoaded",()=>{
            let lunbotu10 = document.querySelector(".lunbotu10");
            let ul = lunbotu10.children[0];

            ul.appendChild(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let idx = 0;

            let page = document.createElement("div");
            page.className = "page";
            for(let i=1;i<len;i++){
                let span = document.createElement("span");
                span.innerText = i;
                if(i === 1){
                    span.classList.add("active");
                }
                page.appendChild(span);
            }

            let imgWidth;
            ul.querySelector("img").onload = function(){
                imgWidth = this.offsetWidth;
                //ul宽度
                ul.style.width = imgWidth*len + "px";
            }
            
            lunbotu10.appendChild(page);
            let timer = setInterval(autoPlay,3000)
            lunbotu10.onmouseenter = function(){
                clearInterval(timer);
            }
            lunbotu10.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            lunbotu10.onclick = e=>{
                if(e.target.parentNode.className === "page"){
                    idx = e.target.innerText-1;
                    show();
                }
            }

            function autoPlay(){
                idx++;
                show();
            }

            function show(){
                if(idx >= len){
                    ul.style.left = 0;
                    idx = 1;
                }
                animate(ul,{left:-imgWidth*idx});
                // 页码高亮
                for(let i=0;i<len -1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(idx === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[idx].className = 'active'
                }
            }
})

document.addEventListener("DOMContentLoaded",function(){
    var cookies = document.cookie;
    var lg = document.querySelector(".lg");
    // lg.innerHTML = cookies.username;
})