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

        //购物车
        console.log(666);
        function carBody(data){
            var total =0;
            var weight =0;
            var tallage =0;
            var res = data.map(function(item){
                sTotal =item.price *item.qty;
                total +=sTotal;
                weight +=item.weight *item.qty;
                tallage +=item.tallage*1;
                return`
                    <ul class="product-info clearfix" data-id="${item.id}">
                        <li class="checkbox">
                            <input type="checkbox"/>
                        </li>
                        <li class="product">
                            <a href="../html/details.html?id=${item.id}" class="product-img">
                                <img src="${item.imgurl}" alt="" class="imgs-1"/>
                            </a>
                            <a href="../html/details.html?id=${item.id}" class="product-name">${item.name}</a>
                        </li>
                        <li class="unit-price">￥${item.price}</li>
                        <li class="qty">
                            <img src="../img/i1.png" class="sub"></a>
                            <input type="text" name="qty" id="qty" value="${item.qty}" title="数量"/>
                            <img src="../img/i2.png" class="add"></a>
                        </li>
                        <li class="weight">${item.weight}kg</li>
                        <li>有货</li>
                        
                        <li class="subtotal">￥${sTotal}</li>
                        <li class="operation"><a href="" class="delete">删除</a></li>
                    </ul>
                `
                
            }).join("");
            
            res +=`
                <div class="product-tfoot clearfix">
                    <div class="product-total">
                        <span class="product-all-weight">重量合计<i class="cs1">${weight}kg</i></span>
                        <span class="product-all-shipping-cost">运费<br><i class="cs2">￥0.00</i></span>
                        <span class="product-all-tax">优惠<i class="cs3">￥1200.00</i></span>
                        <span class="product-all-price">商品金额<i class="cs4">￥${total}</i></span>   
                        
                    </div> 
                </div>
            `
            $('.cart-body').html(res);
            $(".cart-body ul:odd").css({background:"#fff"});
            $(".cart-body ul:even").css({background:"#EAF9FF"});
            // var infos=`
            //     <div class="control clearfix">
            //         <div class="cell checkbox"><input class="foot-check-all" type="checkbox"> 全选</div>
            //         <div class="cell delete-link">
            //             <a href="javascript:void(0)" class="delete">删除选中商品</a>
            //             <a href="javascript:void(0)" class="delete-useless">清除失效商品</a>
            //             <a href="http://www.haituncun.com">继续购物</a>
            //         </div>
            //     </div>
            //     <div class="total-infos clearfix">
            //         <button class="submit-all" type="submit">去结算</button>
            //         <div class="infos-wrap">
            //             <p class="total">
            //                 已选商品
            //                 <span class="total-quantity">1</span>件　　合计：
            //                 <span class="symbol">￥</span><span class="integer">${total}.
            //                 </span>
            //                 <span class="decimal">00</span>
            //             </p>
            //             <p class="all-meta-infos">商品总价：￥<span class="total-product-price">${total}</span> + 运费总计：￥<span class="total-shipping-cost">35.00</span> + 税费总计：￥<span class="total-tax">${total+35}</span> - 运费总优惠：￥<span class="total-shipping-coupon">35.00</span>
            //             </p>
            //         </div>
            //     </div>
            // `
            // $('.cart-foot').html(infos);
            $(".zongzhong").text(weight);
            $(".car_total").text(total);
        }
        $.ajax({
            url:'../api/mycar.php',
            dataType:'json',
            success:function(data){
                console.log(data);
                carBody(data);
            }
        });
        
        $('.yiyaow').on('click','.add',function(e){
            var $this = $(this);
            var $val = $this.siblings('#qty').val()*1;
            var $id =$this.parents('.product-info').data('id');

            console.log($id);
            var $qty = ++$val;
            console.log($qty);
            $.ajax({
                url:'../api/mycar.php',
                dataType:'json',
                data:{
                    id:$id,
                    qty:$qty
                },
                success:function(data){
                    console.log(data);
                    carBody(data);
                }
            })
            e.preventDefault();
        }).on('click','.sub',function(e){
            var $this = $(this);
            var $val = $this.siblings('#qty').val()*1;
            var $id =$this.parents('.product-info').data('id');
            console.log($id);
            var $qty = --$val;
            $qty = $qty <=1 ? 1: $qty; 
            console.log($qty);
            $.ajax({
                url:'../api/mycar.php',
                dataType:'json',
                data:{
                    id:$id,
                    qty:$qty
                },
                success:function(data){
                    carBody(data);
                }
            })
            e.preventDefault();
        }).on("blur","#qty",function(e){
            var $val = $(this).val()*1;
            var $id =$(this).parents('.product-info').data('id');
            var $qty = $val;
            $.ajax({
                url:'../api/mycar.php',
                dataType:'json',
                data:{
                    id:$id,
                    qty:$qty
                },
                success:function(data){
                    carBody(data);
                }
            })
            e.preventDefault();
        })
        .on('click','.delete',function(e){
            var $this = $(this);
            var $id =$this.parents('.product-info').data('id');
            if(confirm("确认不购买选择商品吗？") == true){
                $.ajax({
                    url:'../api/mycar.php',
                    dataType:'json',
                    data:{
                        id:$id,
                        isdel:true
                    },
                    success:function(data){
                        carBody(data);
                    }
                })
                e.preventDefault();
            };
        }).on("click",".kong",function(e){
            // var $this = $(this);
            // var $id =$this.parents('.cart-foot').prev(".cart-body").data("id");
            $.ajax({
                    url:'../api/mycar.php',
                    dataType:'json',
                    data:{
                        // s:$id,
                        isdel:false
                    },
                    success:function(data){
                        $(".cart-body").remove();
                    }
                })
                e.preventDefault();
        }).on("click",".det",function(e){
            checkAll();
            if($(".cart-body").find(":checkbox")){
                var $this = $(this);
                var $id =$this.parents(".cart-foot").prev(".cart-body").find('.product-info').data('id');
                if(confirm("确认不购买选择商品吗？") == true){
                    $.ajax({
                        url:'../api/mycar.php',
                        dataType:'json',
                        data:{
                            id:$id,
                            isdel:true
                        },
                        success:function(data){
                            carBody(data);
                        }
                    })
                    e.preventDefault();
                };
            }
        });
        $(".quan").on("click",function(){
            var $checkboxs = $(".cars").find(":checkbox");
            //勾选复选框
            $checkboxs.prop("checked",this.checked);
            // //高亮当前行
            // $trs[this.checked ? "addClass" : "removeClass"]("selected"); 
        });
        $(".cart-body").on("click","input",function(){
            checkAll()
        });
        $(".css").on("click",function(){
            var $checkboxs = $(".cars").find(":checkbox");
            //勾选复选框
            $checkboxs.prop("checked",this.checked);
        })
        //检测全选按钮状态
        function checkAll(){
            var $checkboxs = $(".cart-body").find(":checkbox");
            //获取选中的复选框
            let $checkeds = $checkboxs.filter(":checked");
            //判断勾选数量与checkbox的数量是否相等
            $(".quan,.css").prop("checked",$checkboxs.length === $checkeds.length);
        }
    })
});