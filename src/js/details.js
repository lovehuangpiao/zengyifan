require(['config'],function(){
    require(['jquery',"xzoom"],function($){
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
       
        
        //6、接收数据
        var id = window.location.search.slice(4);
        console.log(id);
        let $yaoping = $(".yaoping");
        let $tupian = $(".tupian");
        let $xiaotu = $(".xiaotu");
        $(".qieu").on("click","li",function(){
            $tupian[0].src = $(this).find("img")[0].src;
            $(this).css({border:"1px solid red"}).siblings("li").css({border:"1px solid #ddd"});
        });
        $('.goods').gdsZoom({
            position:'right'
        });

        $('.qie').on('click','li',function(){
            $('.goods img').attr({
                src:this.src,
                'data-big':this.dataset.big || this.src
            })
        });
         //购物车
        let $shu = $(".shu");
        let $hov = $(".hov");
        
        $shu.on("input",function(){
            console.log(666)
        })
        $(".ss").on("click",function(){
            $shu[0].value++;
        })
        $(".yy").on("click",function(){
            $shu[0].value--;
            if($shu[0].value <= 1){
                $shu[0].value =  1;
            }
        })
        // $("<li/>").append
        $.ajax({
            url:'../api/details.php',
            dataType:'json',
            data:{
                    id:id
                },
            success:function(data){
                console.log(data);
                // $(".gouwuche").on("click",function(){
                
                    // var $liss = (function(item){
                    // return`
                    //     <li class="goods-item" data-id="${item.id}">
                    //         <img src="${item.imgurl}" alt="" class="img_car"/></a>
                            
                    //         <span class="goods-intro">
                    //             <a href="details.html?id=${item.id}">
                    //                 ${item.name}
                    //             </a>
                    //         </span>
                    //         <span class="goods-price">￥${item.price}</span>
                    //         <img class="i1" src="../img/ii1.png"></i>
                    //         <input type="text" class="inputs">
                    //         <img class="i2" src="../img/ii2.png"></i>
                            
                    //     </li>
                        
                    // `
                    // })(data)
                    // $(".mycar").append($liss);
                // })
                // $(".gouwuche").on("click",function(){
                //     var $liss = (function(item){
                //     return`
                //         <li class="goods-item" data-id="${item.id}">
                //             <img src="${item.imgurl}" alt="" class="img_car"/></a>
                            
                //             <span class="goods-intro">
                //                 <a href="details.html?id=${item.id}">
                //                     ${item.name}
                //                 </a>
                //             </span>
                //             <span class="goods-price">￥${item.price}</span>
                //             <img class="i1" src="../img/ii1.png"></i>
                //             <input type="text" class="inputs" value="${data.qty}">
                //             <img class="i2" src="../img/ii2.png"></i>
                            
                //         </li>
                //     `
                //     })(data);
                //     $(".mycar").append($liss);
                //     $(".inputs")[0].value = ($(".inputs")[0].value)*1+($shu[0].value)*1;
                //     $(".i1").on("click",function(){
                //         $(".inputs")[0].value--;
                //         if($(".inputs")[0].value <= 0){
                //             $(".inputs")[0].value = 1
                //         }
                //         $(".shuliang")[0].innerText = $(".inputs").val();
                //         $(".zong")[0].innerText = '￥' + ($(".shuliang")[0].innerText*data.price).toFixed(2)
                //     });
                //     $(".i2").on("click",function(){
                //         $(".inputs")[0].value++;
                //         $(".shuliang")[0].innerText = $(".inputs").val();
                //         $(".zong")[0].innerText = '￥' + ($(".shuliang")[0].innerText*data.price).toFixed(2)
                //     })
                //     $(".shuliang")[0].innerText = $(".inputs").val();
                //     $(".zong")[0].innerText = '￥' + ($(".shuliang")[0].innerText*data.price).toFixed(2)
                //     // let $qty = $(".inputs").val();
                //     data.qty = $shu[0].value;
                // }); 
                
                $shu[0].value = data.qty;
                $yaoping[0].innerHTML = data.name; 
                $(".ziti")[0].innerHTML = data.name; 
                $tupian.attr({src:data.imgurl});
                $xiaotu.attr({src:data.imgurl});
                $xiaotu.attr({dataBig:data.imgurl});
                $(".jiage")[0].innerText = '￥'+data.price;
                $('.gouwuche').click(function(e){
                    $.ajax({
                        url:'../api/buycar.php',
                        data:{
                            id:data.id,
                            name:data.name,
                            price:data.price, 
                            imgs:data.imgurl,
                            qty:data.qty,
                            weight:0.5,
                        },
                        success:function(res){
                            console.log(res);
                        }
                    })
                    location.href="car.html";
                    e.preventDefault();
                })
            }
        })
    })
});