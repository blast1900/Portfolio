jQuery(function() {
  // header色変化
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 10) {
      jQuery('#p-header').css({ 'background-color': "inherit", "opacity": 0.9 });
    } else {
      jQuery('#p-header').css({ 'background-color': "transparent", "opacity": 1 });
    }
  });

  // スムーススクロール
	jQuery('a[href^="#"]').click(function() {
		let header = jQuery("#p-header").height();
		let speed = 1000;
		let id = jQuery(this).attr("href");
		let target = jQuery("#" == id ? "html" : id);
		let position = jQuery(target).offset().top - header + 1;
		if ("fixed" !== jQuery("#p-header").css("position")) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		jQuery("html, body").animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

  // WOW
  new WOW().init();

  // modaal
  jQuery("#js-checklist__button").modaal({
      content_source: '#js-checklist__modal',
      background_scroll: false
  });


  // ripples
  var regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if(window.navigator.userAgent.search(regexp) === -1){
    jQuery('#p-mv').ripples({ //波紋をつけたい要素の指定
      resolution: 800, //波紋の広がりの速度（値が大きいほど遅くなる）
      dropRadius: 10, //波紋の大きさ（値が大きいほどでかくなる）
      perturbance: 0.01 //波紋による屈折量（値が大きいほどブレる）
    });
  }

  // loader
  // jQuery(window).on('resize', function() {
  //   jQuery('#c-loader-bg').fadeOut(1000);
  // });
  // jQuery(window).on('load', function() {
  //   jQuery('#c-loader-bg').fadeOut(1000);
  // });

});