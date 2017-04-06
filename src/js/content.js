define(['jquery','template'],function($,template){
	function Content(){

	};
	Content.prototype.init = function(){
		$('body').append('<div id="content"/>');
		$('#content').append(this.template.content());
	}

	Content.prototype.template = {
		content: template.compile(
			`
				<div class="wrap">
			<div class="mustCheck">
				<div class="img"></div>
				<div class="container">
					<a href="#" class="item odd">
						<img src="../img/item1.jpg" alt="">
						<div class="info">
							<p class="p1">全场低至4.87折</p>
							<p class="p2">希思黎、兰蔻</p>
							<p class="p3">高贵与美丽并重</p>
							<span>立即疯抢</span>
						</div>
					</a>
					
					<a href="#" class="item even">
						<img src="../img/item2.jpg" alt="">
						<div class="info">
							<p class="p1">全场￥35元起</p>
							<p class="p2">森田药妆、极美肌</p>
							<p class="p3">性价比极高之必入手面膜</p>
							<span>立即疯抢</span>
						</div>
					</a>
					<a href="#" class="item odd">
						<img src="../img/item3.jpg" alt="">
						<div class="info">
							<p class="p1">fresh</p>
							<p class="p2">法国天然护肤品牌</p>
							<p class="p3">人气商品热卖中</p>
							<span>立即疯抢</span>
						</div>
					</a>
					<a href="#" class="item even">
						<img src="../img/item4.jpg" alt="">
						<div class="info">
							<p class="p1">GUCCI、Dior</p>
							<p class="p2">经典国际大牌</p>
							<p class="p3">展现高贵魅力</p>
							<span>立即疯抢</span>
						</div>
					</a>
					<a href="#" class="item odd">
						<img src="../img/item5.jpg" alt="">
						<div class="info">
							<p class="p1">REMESCAR</p>
							<p class="p2">即校魅亮眼霜</p>
							<p class="p3">消除眼袋及黑眼圈</p>
							<span>立即疯抢</span>
						</div>
					</a>
				</div>
			</div>
			<div class="limittedOffer">
				<div class="img"></div>
				<p class="title">每天09:00准时开抢</p>
				<a href="" class="limit-item">
					<div class="limit-img">
						<img src="../img/content-limit-img.jpg" alt="">
						<i>5.3 <b>折</b></i>
					</div>
					<div class="limit-info">
						<p class="time">剩余
							<span class="hour">11</span>：
							<span class="minute">19</span>：
							<span class="second">55</span>
						</p>
						<p class="effect">
							一瓶两用，解决幼纹、皱纹、肌肤松弛、缺乏弹性、眼袋、黑眼圈和肌肤乾燥。
						</p>
						<p class="intro">
							希思黎&nbsp;抗皱修护眼唇霜&nbsp;15毫升 
						</p>
						<div class="price">
							<div class="price-cur">
								<span class="sign">￥</span>
								<span class="num">699</span>
							</div>
							<div class="price-old">
								<span>￥1320</span>
							</div>
						</div>
						<div class="limit-bottom">
							<div class="sold">已售
								<span class="soldnum">2</span>
								件
							</div>
							<span class="limit-btn">马上抢</span>
						</div>
					</div>
				</a>
				<a href="" class="limit-item">
					<div class="limit-img">
						<img src="../img/content-limit-img.jpg" alt="">
						<i>5.3 <b>折</b></i>
					</div>
					<div class="limit-info">
						<p class="time">剩余
							<span class="hour">11</span>：
							<span class="minute">19</span>：
							<span class="second">55</span>
						</p>
						<p class="effect">
							一瓶两用，解决幼纹、皱纹、肌肤松弛、缺乏弹性、眼袋、黑眼圈和肌肤乾燥。
						</p>
						<p class="intro">
							希思黎&nbsp;抗皱修护眼唇霜&nbsp;15毫升 
						</p>
						<div class="price">
							<div class="price-cur">
								<span class="sign">￥</span>
								<span class="num">699</span>
							</div>
							<div class="price-old">
								<span>￥1320</span>
							</div>
						</div>
						<div class="limit-bottom">
							<div class="sold">已售
								<span class="soldnum">2</span>
								件
							</div>
							<span class="limit-btn">马上抢</span>
						</div>
					</div>
				</a>
				<a href="" class="limit-item">
					<div class="limit-img">
						<img src="../img/content-limit-img.jpg" alt="">
						<i>5.3 <b>折</b></i>
					</div>
					<div class="limit-info">
						<p class="time">剩余
							<span class="hour">11</span>：
							<span class="minute">19</span>：
							<span class="second">55</span>
						</p>
						<p class="effect">
							一瓶两用，解决幼纹、皱纹、肌肤松弛、缺乏弹性、眼袋、黑眼圈和肌肤乾燥。
						</p>
						<p class="intro">
							希思黎&nbsp;抗皱修护眼唇霜&nbsp;15毫升 
						</p>
						<div class="price">
							<div class="price-cur">
								<span class="sign">￥</span>
								<span class="num">699</span>
							</div>
							<div class="price-old">
								<span>￥1320</span>
							</div>
						</div>
						<div class="limit-bottom">
							<div class="sold">已售
								<span class="soldnum">2</span>
								件
							</div>
							<span class="limit-btn">马上抢</span>
						</div>
					</div>
				</a>
				<a href="" class="limit-item">
					<div class="limit-img">
						<img src="../img/content-limit-img.jpg" alt="">
						<i>5.3 <b>折</b></i>
					</div>
					<div class="limit-info">
						<p class="time">剩余
							<span class="hour">11</span>：
							<span class="minute">19</span>：
							<span class="second">55</span>
						</p>
						<p class="effect">
							一瓶两用，解决幼纹、皱纹、肌肤松弛、缺乏弹性、眼袋、黑眼圈和肌肤乾燥。
						</p>
						<p class="intro">
							希思黎&nbsp;抗皱修护眼唇霜&nbsp;15毫升 
						</p>
						<div class="price">
							<div class="price-cur">
								<span class="sign">￥</span>
								<span class="num">699</span>
							</div>
							<div class="price-old">
								<span>￥1320</span>
							</div>
						</div>
						<div class="limit-bottom">
							<div class="sold">已售
								<span class="soldnum">2</span>
								件
							</div>
							<span class="limit-btn">马上抢</span>
						</div>
					</div>
				</a>
				<div class="more">
					<a href="" target="_blank">
						查看更多特卖&nbsp;<span>►</span>
					</a>
				</div>
			</div>
			<div class="title_ranking">
				<div class="ranking-header"></div>
				<div class="ranking-list">
					<div class="ranking-column">
						<h2>护肤排行榜</h2>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>

					</div>
					<div class="ranking-column">
						<h2>护肤排行榜</h2>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						
					</div>
					<div class="ranking-column">
						<h2>护肤排行榜</h2>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						<ul>
							<li class="rank-item">
								<span class="rank-icon"></span>
								<a href=""><img src="../img/list-1.jpg" alt=""></a>
								<div class="rank-item-info">
									<p class="rank-item-name"><a href="">SK-II&nbsp;R.N.A. POWER&nbsp;肌源赋活修护精华霜&nbsp;2.5克</a></p>
									<p class="price">
										<span class="price-cur">￥25</span>
										<span class="price-old">￥40</span>
										<span class="item-sold">已售213</span>
									</p>
								</div>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>






			`




			)
	}
	return Content;
})