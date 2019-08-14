$(function(){
	var i=1;
	$(".dropdown").click(function(){
		i++;
		if(i%2==0){
			$(".sf-nav-lino").addClass("sf-nav-libk");
		}else{
			$(".sf-nav-lino").removeClass("sf-nav-libk");
		}
	})
	var j=0
	$(".sf-cenbox").mouseenter(function(){
		j++;
		$(".sf-cenbox>span").stop().css("transform","rotate("+360*j+"deg)");
	});
	
	// 模态框内轮播图
	$(".sf-modal-imgol>li").click(function(){
		var w = $(".sf-modal-imgul>li").width();
		var b = $(this).index();
		$(this).addClass("bor1").siblings().removeClass("bor1");
		$(".sf-modal-imgul").animate({
			"margin-left":-w*b+"px"
		},200)
	})
	$(".sf-imgbox").click(function(){
		var i = $(this).index();
		var j = $(this).children().children().eq(0).attr('src');
		$(".sf-modal-img").attr('src',j);
		$(".sf-modal-txt1").html($(".sf_imgtxt1").eq(i).html())
		$(".sf-modal-txt2").html($(".sf_imgtxt2").eq(i).html())
	})
	
	var swiper = new Swiper('.swiper-container', {
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="' + className + '">' + '</span>';
		},
	  },
	});
})