$(document).ready(function() {

	var nav = $('nav');

	var target = nav.offset().top,
    timeout = null;

	// fancy nav effect
	$(window).scroll(function () {
		if (!timeout) {
		    timeout = setTimeout(function () {
		        clearTimeout(timeout);
		        timeout = null;
		        if ($(window).scrollTop() >= target) {
		            nav.addClass('fixed');
		        } else {
					nav.removeClass('fixed');
				}
		    }, 0);
		}
	});

	//circle animation/fx around image
	var img = $('.circle-img');
	var circle = $('<div class="anim-circle"></div>');
		circle.css('height', img.css('height')); //set circle's height to img's height
		circle.css('width', img.css('width')); //set cricle's width to img's width
		circle.css('background-color', $('body').css('background-color')); //set circle's color to the body's color

	for(var i = 0; i < 4; i++) {
		$('.img-container').append(circle.clone().addClass('circle-' + i));
	}

	var circle0 = $('.circle-0').css('left', '-7.0710678px').css('top', '-7.0710678px');
	var circle1 = $('.circle-1').css('left', '-7.0710678px').css('top', '7.0710678px');
	var circle2 = $('.circle-2').css('left', '0px').css('top', '-10px');
	var circle3 = $('.circle-3').css('left', '-10px').css('top', '0px');

	//ordered by delays. the circle that starts moving first is the first line!
	TweenMax.from(circle1, 0.5, { left: '7.0710678px', top: '-7.0710678px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.125 });
	TweenMax.from(circle3, 0.5, { left: '10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.25 });
	TweenMax.from(circle0, 0.5, { left: '7.0710678px', top: '7.0710678px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.375 });
	TweenMax.from(circle2, 0.5, { top: '10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.5 });

	//slider things
	var slider = $('.slider');

	//animate slider arrows
	var leftArrow = $('.arrow-left');
	var rightArrow = $('.arrow-right');
	var leftArrowTween = TweenMax.to(leftArrow, 0.25, { paused: true, css: { marginLeft: '0px', marginRight: '15px', opacity: '1' }, ease: Power2.easeOut, repeat: 0, delay: 0.1 });
	var rightArrowTween = TweenMax.to(rightArrow, 0.25, { paused: true, css: { marginLeft: '15px', opacity: '1' }, ease: Power2.easeOut, repeat: 0, delay: 0.1 });

	$('.slider-arrow > .arrow-left').mouseenter(function() {
		leftArrowTween.play();
	}).mouseleave(function(){
		leftArrowTween.reverse();
	});
	$('.slider-arrow > .arrow-right').mouseenter(function() {
		rightArrowTween.play();
	}).mouseleave(function(){
		rightArrowTween.reverse();
	});

	//animate slider with GSAP also do some logic to make looping happen.
	var sliderItems = $('.slider-item');
	var sliderItemWidth = $('.slider-item:nth-child(1)').width();

	TweenMax.from(sliderItems, -1, { left: '-=5px', repeat: -1 });

	//arrow animation
	var arrow = $('.arrow-down');

	var arrowTimeline = new TimelineMax({ delay: 1, repeat: -1, repeatDelay: 2 });

	arrowTimeline.from(arrow, 1, { top: '-10px', opacity: 0.25, ease: Power2.easeOut, yoyo: true, repeat: 5, delay: 1 });

	//animation between header and about me


});
