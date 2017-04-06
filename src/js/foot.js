define(['jquery','template'],function($,template){
	function Foot(){

	};
	Foot.prototype.init = function(){
		$('body').append('<div id="footer"/>');
		$('#footer').append(this.template.foot);

	}
	Foot.prototype.template = {
		foot: template.compile(

			`
				
		<div class="wrap">
			<div class="promise">
				<ul>
					<li>
						<span class="img"><img src="../img/promise_icon.png" alt=""></span>
						<p>￥满168免邮</br>
							<span>适用于保税仓商品</span>
						</p>
					</li>
					<li>
						<span class="img"><img src="../img/promise_icon.png" alt=""></span>
						<p>￥满168免邮</br>
							<span>适用于保税仓商品</span>
						</p>
					</li>
					<li>
						<span class="img"><img src="../img/promise_icon.png" alt=""></span>
						<p>￥满168免邮</br>
							<span>适用于保税仓商品</span>
						</p>
					</li>
					<li>
						<span class="img"><img src="../img/promise_icon.png" alt=""></span>
						<p>￥满168免邮</br>
							<span>适用于保税仓商品</span>
						</p>
					</li>
					<li>
						<span class="img"><img src="../img/promise_icon.png" alt=""></span>
						<p>￥满168免邮</br>
							<span>适用于保税仓商品</span>
						</p>
					</li>
				</ul>
			</div>
			<div class="center">
				<div class="help">
					<ul>
						<li>
							<b><a href="">新手上路</a></b>
							<a href="#">购物流程</a>
							<a href="#">优惠券说明</a>
							<a href="#">常见问题</a>
							<a href="#">联系我们</a>
						</li>
						<li>
							<b><a href="">付款方式</a></b>
							<a href="#">在线支付</a>
							<a href="#">积分支付</a>
			
						</li>
						<li>
							<b><a href="">配送方式</a></b>
							<a href="#">常见问题</a>
							<a href="#">联系我们</a>
						</li>
						<li>
							<b><a href="">售后服务</a></b>
							<a href="#">正品保障</a>
							<a href="#">价格承诺</a>
							<a href="#">30日退换保证</a>
							<a href="#">退款程序</a>
							<a href="#">更改订单</a>
						</li>
						<li>
							<b><a href="">莎莎会员</a></b>
							<a href="#">积分奖励</a>
							<a href="#">优惠券说明</a>
						</li>
					</ul>
				</div>
				<div class="erweima">
					<div class="weibo">
						<img src="../img/weiboma.jpg" alt="">
						<p>莎莎网官方微博</p>
						<p>@莎莎网</p>
					</div>
					<div class="weixin">
						<img src="../img/weixinma.jpg" alt="">
						<p>莎莎网官方微信</p>
						<p><b>ID:hksasadotcom</b></p>
					</div>
				</div>
				<img src="../img/shangbiao.jpg" alt="">
			</div>
			
		</div>
		<div class="bottom">
			<div class="wrap">
				<p>
					<a href="">关于莎莎</a>
					<a href="">|</a>
					<a href="">使用条款</a>
					<a href="">|</a>
					<a href="">隐私策略</a>
					<a href="">|</a>
					<a href="">批发服务</a>
					<a href="">|</a>
					<a href="">招商合作</a>
					<a href="">|</a>
					<a href="">帮助中心</a>
					<a href="">|</a>
					<a href="">港澳店铺推广</a>
					<a href="">|</a>
					<a href="">人才招聘</a>
					<a href="">|</a>
					<a href="">联系我们</a>
					<a href="">|</a>
					<a href="">其它送货地区</a>
				</p>
				<p>Copyright 2000-2016 Sa Sa dot Com Limited  版权所有莎莎国际控股有限公司成员</p>
			</div>
		</div>







			`





			)
	}




	return Foot;
})