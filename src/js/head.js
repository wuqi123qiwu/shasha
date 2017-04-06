//head模块
define(['jquery','template'],function($,template){
	//构造函数
	function Head(){

	};

	Head.prototype.init = function(){
		$('body').append('<div id="header"/>');
		$('#header').append(this.template.head());
	}
	Head.prototype.template = {
		head: template.compile(
			` 
				
					<div class="top">

						<div class="wrap">
							<div class="top-left">
								<span>欢迎光临莎莎网 ！&nbsp;&nbsp;</span>
								<a href="#" class="enter">登录</a>
								<span>或</span>
								<a href="#" class="login">免费注册</a>
							</div>

							<div class="top-right">
								<ul>
									<li class="link" class="myAccount" >
										<img src="../img/账户.gif" alt="">
										<a href="" class="">我的账户</a>
										<i><img src="../img/下尖角号.gif"></i>
										<dl>
											<dd><a href="">我的订单</a></dd>
											<dd><a href="">我的积分</a></dd>
											<dd><a href="">我的优惠券</a></dd>
											<dd><a href="">我的收藏</a></dd>
											<dd><a href="">我的评价</a></dd>
										</dl>
									</li>
									<li class="link">
										<img src="../img/car.gif" alt="">
										<a href="" class="">我的购物车</a>
										<div class="carList">
											<div class="car-empty">
												购物车中还没有商品，</br>
												快去挑选心爱的商品吧		
											</div>
										</div>
										
									</li>
									<li class="link">
										<img src="../img/love.gif" alt="">
										<a href="" class="">我的收藏</a>
									</li>
									<li class="link">
										<a href="" class="">我的站内信</a>
									</li>
									<li class="link">
										<a href="" class="">积分中心</a>
									</li>
									<li class="link">
										<a href="" class="">Global site</a>
									</li>
									<li class="link">
										<a href="" class="">关注我们</a>
										<a href="#" class='weibo'>
											<img src="../img/weibo.png"   alt="">
											<img src="../img/weiboma.jpg" class="weiboma"  alt="">
										</a>
										<a href="#" class="weixin">
											<img src="../img/weixin.png"  alt="">
											<img src="../img/weixinma.jpg" class="weixinma" alt="">
										</a>	
									</li>
								</ul>

							</div>
						</div>
					</div>



					<div class="center">
						<div class="wrap">
							<div class="empty">
							</div>
							<div class="log">
								<a href="#">
									<img src="../img/logo.png" alt="">
								</a>
							</div>
							<div class="search">
								
								<div class="search-input">
									<input type="text" placeholder="雅诗兰黛">
								</div>
								<button type="submit" class="search-btn">搜索</button>
								</br>
								<div class="hot-keyword">
									<a href="#">精华</a>
									<a href="#">保湿</a>
									<a href="#">面霜</a>
									<a href="#">眼霜</a>
									<a href="#">资生堂</a>
									<a href="#">补水</a>
									<a href="#">提拉紧致</a>
								</div>
							</div>
						</div>
					</div>


					<div class="bottom">
						<div class="wrap">
							<div class="all-category">
								<div class="category-header">
									<div class="category-header-icon">
										<span class="line"></span>
										<span class="line"></span>
										<span class="line"></span>
									</div>
									全部分类
								</div>
								<div class="category-ul">
									<div class="category-li">
										<div class="category-item">
											面部护肤
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4 class="cover"><a href="#">洁面/磨砂</a></h4>
											<a href="#">泡沫洁面乳</a>
											<a href="#">洁面摩丝</a>
											<a href="#">洁面啫喱</a>
											<a href="#" class="red">洁面奶</a>
											<a href="#">洁面皂</a>
											<a href="#">洁面粉</a>
											<a href="#">磨砂膏</a>
											<a href="#">磨砂啫喱</a>
											<h4><a href="#">眼部/嘴部/颈部护理</a></h4>
											<a href="#" class="red">眼霜</a>
											<a href="#">眼胶</a>
											<a href="#">眼部精华/疗程</a>
											<a href="#">眼膜</a>
											<a href="#">睡眠免洗式眼膜</a>
											<a href="#">润唇膏</a>
											<a href="#">唇部精华</a>
											<a href="#">唇膜</a>
											<a href="#">唇部磨砂</a>
											<a href="#">颈霜</a>
											<a href="#">颈精华</a>
											<a href="#">颈膜</a>
											<h4><a href="#">面膜</a></h4>
											<a href="#">面膜贴</a>
											<a href="#">水洗式面膜</a>
											<a href="#">睡眠面膜</a>
											<a href="#">面膜粉</a>
											<a href="#">面膜泥</a>
											<h4><a href="#">防嗮护理</a></h4>
											<a href="#">防晒乳液</a>
											<a href="#">防晒啫喱</a>
											<a href="#" class="red">防晒喷雾</a>
											<a href="#">防晒膏</a>
											<a href="#">晒后护理</a>
											<a href="#">晒黑护理</a>
											<a href="#">防晒伞</a>
											<h4><a href="#">暗疮护理</a></h4>
											<a href="#">暗疮膏</a>
											<a href="#">暗疮精华</a>
											<a href="#">黑头导出液/膏</a>
											<a href="#">撕拉式鼻贴/鼻膜</a>
											<a href="#">暗疮针</a>
											<h4><a href="">精华/化妆水</a></h4>
											<a href="#">精华液</a>
											<a href="#">精华素/疗程</a>
											<a href="#">柔肤水</a>
											<a href="#" class="red">精华水</a>
											<a href="#">爽肤水</a>
											<a href="#">紧肤水</a>
											<a href="#" class="red">保湿喷雾</a>

										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											彩妆
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4 class="cover"><a href="#">洁面/磨砂</a></h4>
											<a href="#">泡沫洁面乳</a>
											<a href="#">洁面摩丝</a>
											<a href="#">洁面啫喱</a>
											<a href="#" class="red">洁面奶</a>
											<a href="#">洁面皂</a>
											<a href="#">洁面粉</a>
											<a href="#">磨砂膏</a>
											<a href="#">磨砂啫喱</a>
											<h4><a href="#">眼部/嘴部/颈部护理</a></h4>
											<a href="#" class="red">眼霜</a>
											<a href="#">眼胶</a>
											<a href="#">眼部精华/疗程</a>
											<a href="#">眼膜</a>
											<a href="#">睡眠免洗式眼膜</a>
											<a href="#">润唇膏</a>
											<a href="#">唇部精华</a>
											<a href="#">唇膜</a>
											<a href="#">唇部磨砂</a>
											<a href="#">颈霜</a>
											<a href="#">颈精华</a>
											<a href="#">颈膜</a>
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											香水
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4 class="cover"><a href="#">洁面/磨砂</a></h4>
											<a href="#">泡沫洁面乳</a>
											<a href="#">洁面摩丝</a>
											<a href="#">洁面啫喱</a>
											<a href="#" class="red">洁面奶</a>
											<a href="#">洁面皂</a>
											<a href="#">洁面粉</a>
											<a href="#">磨砂膏</a>
											<a href="#">磨砂啫喱</a>
											<h4><a href="#">眼部/嘴部/颈部护理</a></h4>
											<a href="#" class="red">眼霜</a>
											<a href="#">眼胶</a>
											<a href="#">眼部精华/疗程</a>
											<a href="#">眼膜</a>
											<a href="#">睡眠免洗式眼膜</a>
											<a href="#">润唇膏</a>
											<a href="#">唇部精华</a>
											<a href="#">唇膜</a>
											<a href="#">唇部磨砂</a>
											<a href="#">颈霜</a>
											<a href="#">颈精华</a>
											<a href="#">颈膜</a>
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											健康美肌
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4><a href="#">眼部/嘴部/颈部护理</a></h4>
											<a href="#" class="red">眼霜</a>
											<a href="#">眼胶</a>
											<a href="#">眼部精华/疗程</a>
											<a href="#">眼膜</a>
											<a href="#">睡眠免洗式眼膜</a>
											<a href="#">润唇膏</a>
											<a href="#">唇部精华</a>
											<a href="#">唇膜</a>
											<a href="#">唇部磨砂</a>
											<a href="#">颈霜</a>
											<a href="#">颈精华</a>
											<a href="#">颈膜</a>
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											纤体美胸
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4><a href="#">眼部/嘴部/颈部护理</a></h4>
											<a href="#" class="red">眼霜</a>
											<a href="#">眼胶</a>
											<a href="#">眼部精华/疗程</a>
											<a href="#">眼膜</a>
											<a href="#">睡眠免洗式眼膜</a>
											<a href="#">润唇膏</a>
											<a href="#">唇部精华</a>
											<a href="#">唇膜</a>
											<a href="#">唇部磨砂</a>
											<a href="#">颈霜</a>
											<a href="#">颈精华</a>
											<a href="#">颈膜</a>
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											个人护理
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4><a href="#">防嗮护理</a></h4>
											<a href="#">防晒乳液</a>
											<a href="#">防晒啫喱</a>
											<a href="#" class="red">防晒喷雾</a>
											<a href="#">防晒膏</a>
											<a href="#">晒后护理</a>
											<a href="#">晒黑护理</a>
											<a href="#">防晒伞</a>
											<h4><a href="#">暗疮护理</a></h4>
											<a href="#">暗疮膏</a>
											<a href="#">暗疮精华</a>
											<a href="#">黑头导出液/膏</a>
											<a href="#">撕拉式鼻贴/鼻膜</a>
											<a href="#">暗疮针</a>
											<h4><a href="">精华/化妆水</a></h4>
											<a href="#">精华液</a>
											<a href="#">精华素/疗程</a>
											<a href="#">柔肤水</a>
											<a href="#" class="red">精华水</a>
											<a href="#">爽肤水</a>
											<a href="#">紧肤水</a>
											<a href="#" class="red">保湿喷雾</a>
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											男士专区
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4><a href="#">暗疮护理</a></h4>
											<a href="#">暗疮膏</a>
											<a href="#">暗疮精华</a>
											<a href="#">黑头导出液/膏</a>
											<a href="#">撕拉式鼻贴/鼻膜</a>
											<a href="#">暗疮针</a>
						
										</div>
									</div>
									<div class="category-li">
										<div class="category-item">
											育婴护理
										</div>
										<div class="more-category">&#62;</div>
										<div class="clear"></div>
										<div class="more-content">
											<h4><a href="#">暗疮护理</a></h4>
											<a href="#">暗疮膏</a>
											<a href="#">暗疮精华</a>
											<a href="#">黑头导出液/膏</a>
											<a href="#">撕拉式鼻贴/鼻膜</a>
											<a href="#">暗疮针</a>
											<h4><a href="">精华/化妆水</a></h4>
											<a href="#">精华液</a>
											<a href="#">精华素/疗程</a>
											<a href="#">柔肤水</a>
											<a href="#" class="red">精华水</a>
											<a href="#">爽肤水</a>
											<a href="#">紧肤水</a>
											<a href="#" class="red">保湿喷雾</a>
										</div>
									</div>
								</div>
								
							</div>
							<div class="minute-category">
								<ul class='nav'>
									<li class="nav-item">
										<a href="#">面部护肤</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">彩妆</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">限时特卖
											<i class="nav-hot"></i>
										</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">贵宾专享</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">闪电保税专区
											<i class="nav-hot"></i>
										</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">清仓特卖</a>
									</li>
									<li class="nav-sep"><a>/</a></li>
									<li class="nav-item">
										<a href="#">所有品牌
											<i class="i-confont">&#9660;</i>
										</a>
									</li>
								</ul>
							</div>
							<div class="clear">
							</div>
						</div>
					</div>
				
			

			`	




			)

	}
 	
 	return Head;
})