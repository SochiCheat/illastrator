$(document).ready(function(){

	$(".zoom_nav_on a").click(function(){
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$('.zoom_nav span').remove()
		$(this).append("<span></span>")
		$(".zoom_nav a").removeClass("active")
		$(this).addClass("active")
		
		$('.zoom_nav span').show()
		$('#largeImg').attr({src: largePath}).load(function() {  
			$('.zoom_nav span').hide();
		});
		return false;
	});


	// thumb_nav
	$('.thumb_nav span').hide();
	$("#portfolio_pg .thumb_nav a").click(function(){
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$('.thumb_nav span').remove()
		$(this).append("<span></span>")
		$(".thumb_nav a").removeClass("active")
		$(this).addClass("active")
		
		$('.thumb_nav span').show()
		$('#largeImg').attr({src: largePath}).load(function() {  
			$('.thumb_nav span').hide();
		});
		return false;
	});


	// tabs
	$('ul.tabnav a').click(function() {
		var curChildIndex = $(this).parent().prevAll().length + 1;
		$(this).parent().parent().children('.current').removeClass('current');
		$(this).parent().addClass('current');
		$(this).parent().parent().next('.tabcontainer').children('.current').fadeOut('fast',function() {
			$(this).removeClass('current');
			$(this).parent().children('div:nth-child('+curChildIndex+')').fadeIn('normal',function() {
				$(this).addClass('current');
			});
		});
		return false;								
	});


	// add zoom icon span
	$(".gallery img, .wallpaper_list img").before('<span class="zoom"></span>');

	//validate forms
	$("#commentform").validate({
			rules: {
				comment: {
				required: true,
				minlength: 12
			}
			},
			messages: {
				comment: {
				required: "Please write your comment",
				minlength: "Sorry, your comment is too short (min: 12 characters)"
			}
			}
	});

	$(".wpcf7-form").validate();

	//prettyphoto plugin
	$("a[rel^='prettyPhoto']").prettyPhoto();

	
	//scrollto
	$(".backtotop a").click(function(){
		$(window).scrollTo( '#header', 800 )
		return false;
	});

	$(".jumptocomments").click(function(){
		$(window).scrollTo( '#comments', 800 )
		return false;
	});

	$(".jumptorespond").click(function(){
		$(window).scrollTo( '#respond', 800 )
		return false;
	});

	//home splash hover
	$("#splash").append("<span></span>");	
	$("#splash a").hover(function() {
		$("#splash").append("<span class='"+ this.rel +"'></span>");
	}, function() {
		$("#splash").find("span").remove();
	});

	
/* comment area start */
	//set secondary avatar size
	$(".commentlist ul .avatar").css({'width' : '38px', 'height' : '38px'});

	$(".commentlist .expand").hide();
	$(".commentlist .collapse").show();

	$(".commentlist .reply").hide();
	
	//.reply button hover
	$(".commentlist li").hover(function() {
		$(this).find(".reply").show();
	}, function() {
		$(this).find(".reply").hide();
	});
	
	//reply this
	$(".reply_this_thread").hide();

	$(".reply a").click(function(){
		$("#respond h4").hide()
		$("#respond").addClass("respond_active")
		$(".reply_this_thread").show()
		$(this).parents("li").find(".expand:show").hide()
		$(this).parents("li").find(".collapse:hidden").show()
		$(this).parents("li").find(".commententry_wrap:hidden").slideToggle(800)
		$(this).parents("li").find(".timestamp:hidden").slideDown("slow")
		$(this).parents("li").find(".gravatar").animate({"left": "-62px"})
		$(this).parents(".reply").next(".expand").next(".collapse").next(".gravatar").find(".avatar").animate({"width": "48px", "height": "48px"})
		$(this).parents("li").children("ul").find(".avatar").animate({"width": "38px", "height": "38px"})
		$("#respond").hide().slideDown()
		return false;
	});

	//cancel reply
	$("#cancel-comment-reply-link").click(function(){
		$("#respond h4").show()
		$("#respond").removeClass("respond_active")
		$(".reply_this_thread").hide()
		$("#respond").hide().slideDown()
		return false;
	});

	//toggle all button
	$(".toggle_all").show();
	$(".expand_all").hide();

	//collapse all
	$(".collapse_all").click(function(){
		$(".commententry_wrap").slideUp(800)
		$(".gravatar").animate({"left": "-39px"})
		$(".commentlist li .gravatar").children('.avatar').animate({"width": "25px", "height": "25px"})
		$(".commentlist ul li .gravatar").children('.avatar').animate({"width": "20px", "height": "20px"})
		$(".collapse").hide()
		$(".expand").show()
		$(this).hide()
		$(".expand_all").show()
		$(".timestamp").hide();
		return false;
	});

	//expand all
	$(".expand_all").click(function(){
		$(".commententry_wrap").slideDown(800).show()
		$(".gravatar").animate({"left": "-62px"})
		$(".commentlist .gravatar").children('.avatar').animate({"width": "48px", "height": "48px"})
		$(".commentlist ul .gravatar").children('.avatar').animate({"width": "38px", "height": "38px"})
		$(".collapse").show()
		$(".expand").hide()
		$(".timestamp").slideDown("slow");
		$(this).hide()
		$(".collapse_all").show()
		return false;
	});

	//collapse
	$(".collapse").click(function(){
		$(this).next(".gravatar").next(".timestamp").next(".author").next(".commententry_wrap").slideUp(800)
		//$(this).next(".gravatar").children('.avatar').attr('width', '25').attr('height', '25')
		$(this).next(".gravatar").animate({"left": "-39px"})
		$(this).next(".gravatar").children('.avatar').animate({"width": "25px", "height": "25px"})
		$(this).hide()
		$(this).prev(".expand").show()
		$(this).next(".gravatar").next(".timestamp").hide();
		return false;
	});
	//secondary collapse
	$(".commentlist ul .collapse").click(function(){
		$(this).next(".gravatar").children('.avatar').animate({"width": "20px", "height": "20px"});
	});

	//expand
	$(".commentlist li .expand").click(function(){
		$(this).next(".collapse").next(".gravatar").next(".timestamp").next(".author").next(".commententry_wrap").slideDown(800)
		$(this).next(".collapse").next(".gravatar").animate({"left": "-62px"})
		$(this).next(".collapse").next(".gravatar").children('.avatar').animate({"width": "48px", "height": "48px"})
		$(this).hide()
		$(this).next(".collapse").show()
		$(this).next(".collapse").next(".gravatar").next(".timestamp").slideDown("slow");
		return false;
	});
	//secondary expand
	$(".commentlist ul li .expand").click(function(){
		$(this).next(".collapse").next(".gravatar").children('.avatar').animate({"width": "38px", "height": "38px"});
		return false;
	});

	$(".commentlist ul li:last").css({'padding-bottom' : '0'});
/* comment area end */

	
	//append quotation mark to quotelist
	$(".quotelist li").append("<span class='hang_quote'>&#147;</span>");	
	
	
	//remove border / margin
	$(".tabnav li:last").addClass("no_border");
	$(".portfolio_gallery li:nth-child(3n)").addClass("no_margin");

}); //close doc ready