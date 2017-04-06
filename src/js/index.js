requirejs(['config'],function(){

	require(['jquery','head','content','foot'],function($,Head,Content,Foot){
		var oHead=new Head();
		oHead.init();
		var oContent=new Content();
		oContent.init();
		var oFoot=new Foot();
		oFoot.init();
	})
})