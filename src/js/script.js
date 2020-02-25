jQuery(function() {
  $(window).scroll(function() {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('#p-header').css({ 'background-color': "inherit", "opacity": 0.9 });
    } else {
      jQuery('#p-header').css({ 'background-color': "transparent", "opacity": 1 });
    }
  });

  $('#p-mv').ripples({ //波紋をつけたい要素の指定
    resolution: 800, //波紋の広がりの速度（値が大きいほど遅くなる）
    dropRadius: 10, //波紋の大きさ（値が大きいほどでかくなる）
    perturbance: 0.01 //波紋による屈折量（値が大きいほどブレる）
  });
});