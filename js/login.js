$(()=>{
	$("#btnLogin").click(()=>{
		let u=$("#uname").val();
		let p=$("#upwd").val();
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:8080/user/login",
			data:{uname:u,upwd:p},
            xhrFields:{withCredentials:true}
		}).then(data=>{
			console.log(1);
			if(data.code<0)
				alert(data.msg);
			else{
				//如果有search
				if(location.search!==""){
					location=decodeURIComponent(
						location.search.slice(6)
					);
				}else
					location="home.html";
			}
		})
	});
});