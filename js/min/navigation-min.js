"use strict";$(document).ready(function(){function t(){e.each(function(){var t=$(this),o=$('#cd-vert-nav a[href="#'+t.attr("id")+'"]').data("number")-1;t.offset().top-$(window).height()/2<$(window).scrollTop()&&t.offset().top+t.height()-$(window).height()/2>$(window).scrollTop()?n.eq(o).addClass("is-selected"):n.eq(o).removeClass("is-selected")})}function o(t){$("body,html").animate({scrollTop:t.offset().top},700)}var e=$(".cd-section"),n=$("#cd-vert-nav a");t(),$(window).on("scroll",function(){t()}),n.on("click",function(t){t.preventDefault(),o($(this.hash))}),$(".touch .cd-nav-trigger").on("click",function(){$(".touch #cd-vert-nav").toggleClass("open")}),$(".touch #cd-vert-nav a").on("click",function(){$(".touch #cd-vert-nav").removeClass("open")})});