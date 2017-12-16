$(()=>{
	$.get("data/routes/users/isLogin.php")
		.then(data=>{
		if(data.ok==0)
			location=
				"login.html?back="+
				encodeURIComponent(location.href);
		
		$.get("data/routes/cart/getCart.php").then(data=>{
			var html="";
			for(var p of data){
				html+=`            
					<div class="imfor">
					  <div class="check">
						<img src="${p.isChecked?'img/cart/product_true.png':'img/cart/product_normal.png'}" alt="${p.iid}">
					  </div>
					  <div class="product">
						<a href="product_details.html?lid=${p.lid}">
						  <img src="${p.sm}" alt="">
						</a>
						<span class="desc">
						  <a href="product_details.html?lid=${p.lid}">${p.title}</a>
						</span>
						<p class="col">
						  <span>规格：</span>
						  <span class="color-desc">【${p.spec}】 </span>
						</p>
					  </div>
					  <div class="price">
						<p class="price-desc">阿甲专享价</p>
						<p>
						  <b>￥</b>${p.price}
						</p>
					  </div>
					  <div class="num">
						<span class="reduce">&nbsp;-&nbsp;</span>
						<input type="text" value="${p.count}">
						<span class="add">&nbsp;+&nbsp;</span>
					  </div>
					  <div class="total-price">
						<span>￥</span>
						<span>${(p.price*p.count).toFixed(2)}</span>
					  </div>
					  <div class="del">
						<a href="#" data-iid="${p.iid}">删除</a>
					  </div>
					</div>`;
			}
			var $content=$("#content-box-body"),$checkTop=$(".check-top>img");
			$content.html(html);
			$checkTop.off("click").click(()=>{
				if($checkTop.attr("src").endsWith("normal.png"))
					$tar.attr("src","img/cart/product_true.png");
				else
					$tar.attr("src","img/cart/product_normal.png");
				$checkTop.attr("src",$content.find(".check>img[src$='normal.png']").size()==0?"img/cart/product_true.png":"img/cart/product_normal.png")
				
				$content.find(".check>img").attr("src",$tar.attr("src"));
				getTotal();
			});
			$content.on("click",".check>img",e=>{}).on("click",".reduce,.add",e=>{
				var $tar=$(e.target);
				var $input=$tar.siblings("input")
				var n=parseInt($input.val);
				if($tar.is(".add")) n++;
				else n--;


			})
		});
	})
})