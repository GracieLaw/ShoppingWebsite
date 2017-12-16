$(()=>{
    // 楼层
    $.ajax({
        url:"../template.json",
        success:function(data){
            // console.log(data);
            let html='';
            for(let key in data){
                let f=data[key];
                let p=f[0];
                html+=`<div id="${key}">
                            <div class="am-container ">
                                <div class="shopTitle ">
                                    <h4>${f[1]["category"]}</h4>
                                    <h3>${f[1]["describe"]}</h3>
                                    <div class="today-brands ">
                                        <a href="# ">腰果</a>
                                        <a href="# ">松子</a>
                                        <a href="# ">夏威夷果 </a>
                                        <a href="# ">碧根果</a>
                                        <a href="# ">开心果</a>
                                        <a href="# ">核桃仁</a>
                                    </div>
                                    <span class="more ">
                            <a href="# ">更多美味<i class="am-icon-angle-right" style="padding-left:10px ;" ></i></a>
                                </span>
                                </div>
                            </div>
                            
                            <div class="am-g am-g-fixed floodThree ">

                                <div class="am-u-sm-4 text-four list">
                                    <div class="word">
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                        <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                                    </div>
                                    <a href="# ">
                                        <img src="../images/${p[0]['img']} " />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[0]["title"]}
                                            </div>
                                        </div>
                                    </a>
                                    <div class="triangle-topright"></div>
                                </div>
                                <div class="am-u-sm-4 text-four">
                                    <a href="# ">
                                        <img src="../images/${p[1]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[1]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[1]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="am-u-sm-4 text-four sug">
                                    <a href="# ">
                                        <img src="../images/${p[2]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[2]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[2]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
        
                                <div class="am-u-sm-6 am-u-md-3 text-five big ">
                                    <a href="# ">
                                        <img src="../images/${p[3]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[3]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[3]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="am-u-sm-6 am-u-md-3 text-five ">
                                    <a href="# ">
                                        <img src="../images/${p[4]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[4]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[4]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="am-u-sm-6 am-u-md-3 text-five sug">
                                    <a href="# ">
                                        <img src="../images/${p[5]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[5]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[5]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="am-u-sm-6 am-u-md-3 text-five big">
                                    <a href="# ">
                                        <img src="../images/${p[6]['img']}" />
                                        <div class="outer-con ">
                                            <div class="title ">
                                                ${p[6]["title"]}
                                            </div>
                                            <div class="sub-title ">
                                                ${p[6]["sub-title"]}
                                            </div>
                                            <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
                                        </div>
                                    </a>
                                </div>
        
                            </div>

                            <div class="clear "></div>
                        </div>
                    `;
            }
            $("#floor").html(html);
        },
        error:function(){alert("error");}
    });
});