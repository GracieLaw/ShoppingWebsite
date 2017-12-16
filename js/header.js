//加载index.html->自动执行header.js
$(()=> {
    function isLogin() {
        //判断登录:
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:8080/user/is",
            xhrFields: {withCredentials: true},
        }).then(data => {//data:{code:1,uid:xxx,uname:xxx}
            if (data.code > 0) {
                $("#wel").html(`
					<a href="javascript:;" target="_top" class="h">欢迎您，${data.uname} </a>				
					<a id="logout" href="javascript:;" target="_top"> 注销</a>
				`);
                $("#linkToCart").attr("href","../home/shopCart.html");
                $("#linkToPerson").attr("href","../person/index.html");
                $("#linkToCollection").attr("href","../person/collection.html");
                $("#shopCart").children("a").attr("href", "../home/shopCart.html");
                $(".s-name").html(data.uname);
            } else {
                $("#wel").html(`
					<a href="../home/login.html" target="_top" class="h">亲，请登录</a>				
					<a href="../home/register.html" target="_top">免费注册</a>
				`);
            }
        });
    }

    //注销:
	function logout(){
		$("#wel").click("#logout",()=>{
			$.get("../data/routes/users/logout.php").then(()=>location.reload());
		});
    }
//
// })
// 	//向header.html发送ajax get请求
    $("#header").load("header.html", () => {
        //原理: $("#header").html(xhr.responseText);
        /*如果url中有kw参数，就读取kw参数到txtSearch文本框中*/
        if (location.search)
            $("#txtSearch").val(
                decodeURI(location.search.split("=")[1])
            );
        isLogin();
    });
});

// 		/*为search按钮添加单击事件，跳转到商品列表页*/
// 		//查找data-trigger属性为search的a绑定单击事件
// 		$("[data-trigger=search]").click(()=>{
// 			//获得id为txtSearch的内容,去掉开头和结尾的空格保存在变量kw中
// 			var kw=$("#txtSearch").val().trim();
// 			if(kw!=="")//如果kw不为""
// 				//用location跳转到products.html?kw=kw
// 				location="products.html?kw="+kw;
// 		});

// 		//搜索帮助:
// 		var $txtSearch=$("#txtSearch"),
// 			  $shelper=$("#shelper");
// $txtSearch.keyup(e=>{
// 	if(e.keyCode!=13){
// 		if(e.keyCode==40){
// 			if(!$shelper.is(":has(.focus)")){
// 				$shelper.children()
// 								.first().addClass("focus");
// 			}else{
// 				if($shelper.children().last()
// 						.is(".focus")){
// 					$shelper.children(".focus")
// 								.removeClass("focus");
// 					$shelper.children()
// 								.first().addClass("focus");
// 				}else{
// 					$shelper.children(".focus")
// 								.removeClass("focus")
// 								.next().addClass("focus");
// 				}
// 			}
// 			$txtSearch.val(
// 				$shelper.children(".focus")
// 								.attr("title")
// 			);
// 		}else if(e.keyCode==38){
// 			if(!$shelper.is(":has(.focus)")){
// 				$shelper.children()
// 					.last().addClass("focus");
// 			}else{
// 				if($shelper.children()
// 					.first().is(".focus")){
// 					$shelper.children(".focus")
// 								.removeClass("focus");
// 					$shelper.children()
// 								.last().addClass("focus");
// 				}else{
// 					$shelper.children(".focus")
// 								.removeClass("focus")
// 								.prev().addClass("focus");
// 				}
// 			}
// 			$txtSearch.val(
// 				$shelper.children(".focus").attr("title")
// 			);
// 		}else{
// 			var $tar=$(e.target);
// 			$.get(
// 				"data/routes/products/searchHelper.php",
// 				"term="+$tar.val()
// 			).then(data=>{
// 				var html="";
// 				for(var p of data){
// 					html+=`<li title="${p.title}">
// 						<div class="search-item" title="${p.title}" data-url="product_details?lid=${p.lid}">${p.title}</div>
// 					</li>`
// 				}
// 				$shelper.show().html(html);
// 			});
// 		}
// 	}else
// 		$("[data-trigger=search]").click();
// }).blur(()=>$shelper.hide());
// 	});
// 	$(window).scroll(()=>{
// 		var scrollTop=$(window).scrollTop();
// 		//如果scrollTop>=380,就为id为header-top的div添加class fixed_nav
// 		if(scrollTop>=380)
// 			$("#header-top").addClass("fixed_nav");
// 		//否则，就移除id为header-top的div的fixed_nav class
// 		else
// 			$("#header-top").removeClass("fixed_nav");
// 	});
