require(['config'],function(){
    require(['jquery'],function($){
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
        // $(".yp").on("mouseenter",function(){
        //     $yong.css({display:"block"});
        // }).on("mouseleave",function(){
        //     $yong.css({display:"none"});
        // })
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
        });
        //7、左边动画
        let f = true;
        let $ull = $(".ull");
        $(".uul").on("click","img",function(){
            let $this = $(this);
            if(f){
                f=false;
                $this.closest("li").find(".ull").css({display:"block"}).closest("li").siblings().find(".ull").css({display:"none"});
                $this.attr({src:"../img/jianjian.png"});
            }else{
                f = true;
                $this.closest("li").find(".ull").css({display:"none"}).closest("li").siblings().find(".ull").css({display:"none"}).closest("li").find("img").attr({src:"../img/jiahao.png"});
                $this.attr({src:"../img/jiahao.png"});
            }
            
        })
        //6、生成数据
        //ajax数据接收
        var pageNo =1;
        var qty =24;
        var $nei = $('.nei');
        var $page=$('.filter-pager .pager');
        $.ajax({
            type:'POST',
            url:'../api/list.php',
            dataType:'json',
            data:{
                pageNo:pageNo,
                qty:qty
            },
            success:function(res){
                console.log(res);
                // console.log($liss)
                var $liss = res.data.map(function(item){
                    return`
                        <li class="goods-item" data-id="${item.id}">
                            <a href="details.html?id=${item.id}" class="goods-img"><img src="${item.imgurl}" alt="" /></a>
                            <span class="goods-price">${item.price}</span>
                            <p class="goods-intro">
                                <img src="../img/zi.png">
                                <a href="details.html?id=${item.id}">
                                    ${item.name}
                                </a>
                            </p>
                            <div class="shop-name">
                                <img src="../img/ying.png">
                                <img src="../img/zix.png" class="zix">
                            </div>
                        </li>
                    `
                })
                $nei.html($liss);
                // 处理分页
                var pageQty = Math.ceil(res.total/res.qty);
                var pageInner= `<li><a href="">首页</a></li>`;
                for(var i=1;i<=pageQty;i++){
                    pageInner +=`<li class="page-num"><a href="">${i}</a></li>`
                }
                pageInner +=`
                    <li><a href="">下一页</a></li>
                    <li><a href="">尾页</a></li>
                    <li class="total-page">共<b>${pageQty}</b>页</li>
                    <li class="goto-page">
                        <form action="">
                            到第
                            <input type="text" class="custom-page"/>
                            页
                            <input type="submit" /  class="custom-enter" value="确定">
                        </form>
                    </li>
                `
                $page.html(pageInner);
                console.log($('.filter-pager .pager .page-num'));
                $('.filter-pager .pager .page-num').eq(pageNo-1).children('a').addClass('active');
            }
        })
    // function shengjia(b){
    //     return function(obj1,obj2){
    //         var x = obj1[b];
    //         var y = obj2[b];
    //         return x-y;
    //     }
    // }
        
    // $("").onclick=function(){
        
    //     var ss=date.sort(shengjia('sale'));
    //     goodslist.innerHTML = jiegou(ss) ;
    // }

    // arrow2.onclick=function(){
        
    //     var rss=date.sort(shengjia('sale')).reverse();
    //     goodslist.innerHTML = jiegou(rss) ;
    // }
         


        $page.on('click','a',function(e){
            var $pageEnd =$('.filter-pager .pager .page-num').last().children('a').text();
            console.log($pageEnd);
            var $this =$(this);
            var $txt =$this.text();
            if($txt==='首页'){
                pageNo=1;
            }else if($txt==='尾页'){
                pageNo=$pageEnd;
            }else if($txt==='下一页'){
                pageNo++;
                pageNo = pageNo>$pageEnd ? $pageEnd : pageNo;
            }else{
                pageNo=$txt*1;
            }
            $.ajax({
                type:'POST',
                url:'../api/list.php',
                dataType:'json',
                data:{
                        pageNo:pageNo,
                        qty:24
                    },
                success:function(res){
                    var $liss=res.data.map(function(item){
                        return`
                            <li class="goods-item" data-id="${item.id}">
                                <a href="details.html?id=${item.id}" class="goods-img"><img src="${item.imgurl}" alt="" /></a>
                                <span class="goods-price">￥${item.price}</span>
                                <p class="goods-intro">
                                    <img src="../img/zi.png">
                                    <a href="details.html?id=${item.id}">
                                        ${item.name}
                                    </a>
                                </p>
                                <div class="shop-name">
                                    <img src="../img/ying.png">
                                    <img src="../img/zix.png" class="zix">
                                </div>
                            </li>
                        `
                    })
                    $nei.html($liss);
                    $this.parent().siblings().children('a').removeClass('active');
                    $('.filter-pager .pager .page-num').eq(pageNo-1).children('a').addClass('active');
                }
            })
            e.preventDefault();
        })
        $('.custom-enter').on('click',function(){
            e.preventDefault();
            console.log(666);
        })
    })
});
