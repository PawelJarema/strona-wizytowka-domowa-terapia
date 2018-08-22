$(document).ready(() => {
	var $main = $('main section'),
		$animationElements = $('.animation-element'),
		$lazyLoadImages = $('.lazy'),
		$nav = $('nav'),
		$navButtons = $('.nav-buttons'),
		$navs = $navButtons.find('li'),
		$window = $(window),
		$view = $window.width(),
		$inputs = $('input[type="text"], textarea'),
		$links = $('.link'),
		$body = $('body'),
		$dropdown = $('.dropdown'),
		$fabButton = $('.fab-button'),
		$gallery_links = $('.col-5 div a'),
		$hamburger = $('.hamburger'),
		$social = $('.social'),
		$fixedImage = $('img.fixed'),
		active;

	var anim_time = 500;

	var middle = ($window.height() - $nav.height() - 100) / 3;
	$nav.css({'margin-top': middle, 'opacity': 1});

	$('#galeria .col-95 h2').click(function() {
		scrollToTop();
	});

	var hamburgerToggleMenu = function() {
		var $this = $(this),
			height = $this.height(),
			time = 250,
			active = $this.hasClass('active');

		$social.toggleClass('in-view');
		$this.toggleClass('active');
		$main.toggleClass('half-hidden')

		if (!active) {
			$navButtons.animate({'top': -10}, time);
		} else {
			$navButtons.animate({'top': -500}, time);
		}
	};

	var hamburgerClearScreen = function() {
		$('.enlarged-image-wrapper').removeClass('enlarged-image-wrapper');
		$hamburger.removeClass('active temp-active');
		$hamburger.unbind('click', hamburgerClearScreen);
		$hamburger.on('click', hamburgerToggleMenu);
		$nav.removeClass('hide');
		$social.addClass('in-view');
	}

	$hamburger.on('click', hamburgerToggleMenu);

	$('.open').on('click', function() {
		var $this = $(this),
			$parent = $this.parent(),
			$content = $parent.find('p');

		$this.toggleClass('opened');
		$content.toggleClass('opened');
	});

	$links.on('click', function() {
		var $link = $(this),
			element = $link.attr('focus'),
			navto = $link.attr('navto'),
			show = $link.attr('href'),
			$focus_fields = $(element),
			$focus = $focus_fields.first();

		if (navto) {
			$('a[title="' + navto + '"]').trigger('click');
		} else if (show) {
			var animationTime = 350;
			var $linkList = $('.col-5 div');
			if (show === '#fotografie') {
				$link.next().removeClass('active');
				$link.addClass('active');

				$linkList.css('display', 'block');
				$('#filmy').animate({opacity: 0}, animationTime, function() { 
					$(this).addClass('hidden-gone'); 
					$('#zdjecia').css({'opacity': 1}).removeClass('hidden-gone');
				});

				$window.trigger('scroll');
			} else if (show === '#wideo') {
				$link.prev().removeClass('active');
				$link.addClass('active');

				$('#zdjecia').animate({opacity: 0}, animationTime, function() { 
					$(this).addClass('hidden-gone'); 
					$('#filmy').css({'opacity': 1}).removeClass('hidden-gone');
				});

				$linkList.css('display', 'none');
				$linkList.find('a').removeClass('in-view');
			}
		}

		// if ($focus.val()) {
		// 	$focus = $focus.nextAll(element).first();
		// }

		$focus.focus();
	});

	$dropdown.unbind();
	$dropdown.on('click', function() {
		var $this = $(this);
		$this.toggleClass('dropdown-open');
		$this.parent().toggleClass('no-overflow auto-height');
		$('.dropdown-content p, .dropdown-content .quote').toggleClass('animation-element');
		reasignAnimationElements();
	});

	$navs.on('click', function() {
		if (!$nav.hasClass('top')) {
			$nav.addClass('top').removeAttr('style');
			$hamburger.removeAttr('style');
		}

		$('header nav .active, section.active').removeClass('active');

		var $this = $(this),
			$link = $this.find('a'),
			nav_item_id = $link.attr('href');

		if (!active) {
			$('.social').addClass('in-view');
		} 	
		
		$this.addClass('active');
		$(nav_item_id).addClass('active');

		if(nav_item_id === '#galeria') {
			if (!$gallery_links.hasClass('animation-element')) {
				$gallery_links.addClass('animation-element');
				reasignAnimationElements();
			}
		} else {
			$gallery_links.removeClass('animation-element').removeClass('in-view');
			reasignAnimationElements();
		}

		active = nav_item_id;
		setTimeout(() => {
			$window.trigger('scroll');
		}, 1500);
		
	});

	$inputs.each(function() {
		var $this = $(this),
		$span = $this.nextAll('span').first();

		if($this.val()) {
			$span.addClass('label-up');
		}

		$this.on('change keyup', function() {
			if ($this.val()) {
				$span.addClass('label-up');
			} else {
				$span.removeClass('label-up');
			}
		});
	});

	$fabButton.on('click', function() {
		scrollToTop();
	});

	$fabButton.one('mouseenter', function() {	
		var $fab = $(this);			
		$fab.css({
			'animation': 'jump-up 1s ease-in-out 1'
		});

		setTimeout(() => {
			$fab.removeAttr('style');
		}, 1500);
	});


	$window.on('scroll resize', checkIfInView);
	$window.trigger('scroll');

	function checkIfInView() {

		if ($window.scrollTop() > 50) {
			$fabButton.removeClass('hidden-transparent');

			var top = $fixedImage.css('top');
			$fixedImage.css('top', 115 + $window.scrollTop() + 'px');
		} else {
			$fabButton.addClass('hidden-transparent');
		}

		$.each($lazyLoadImages, function() {
			var $element = $(this),
				$wrapper = $element.parent(),
				$card = $wrapper.parent(),
				data = $element.attr('data'),
				placeholder = $element.next();

			if (active === '#galeria' && inView($element) && data) {
				$element.attr('src', data).on({
					'load': function() { 
						placeholder.css('display', 'none');
						$element.removeAttr('data').unbind('load'); 
					},
					'click': function() { 		
						if (data) {
							$element.attr('src', data.replace(/thumbnails/, 'photos'));
						}
						
						if (!$wrapper.hasClass('enlarged-image-wrapper')) {
							$hamburger.toggleClass('active temp-active');
							$hamburger.unbind('click', hamburgerToggleMenu);
							$hamburger.on('click', hamburgerClearScreen);

							$social.removeClass('in-view');

							$wrapper.toggleClass('enlarged-image-wrapper'); 
							
							var width = $element.width(),
							windowWidth = $window.width(),
							offsetX = (windowWidth - width) / 2;

							if (offsetX > 0) {
								$element.css({'left': offsetX + 'px'});
							}

							$nav.addClass('hide');
						} 
					}
				});
			}
		});

		$.each($animationElements, function() {
			var $element = $(this),
				elementHeight = $element.outerHeight(),
				elementTopPosition = $element.offset().top,
				elementBottomPosition = (elementTopPosition + elementHeight);
			if (inView($element)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}

	function inView($element) {
		var windowHeight = $window.height(),
			windowTopPosition = $window.scrollTop(),
			windowBottomPosition = (windowTopPosition + windowHeight);

		var elementHeight = $element.outerHeight(),
			elementTopPosition = $element.offset().top,
			elementBottomPosition = (elementTopPosition + elementHeight);

		return ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition));

	}

	function scrollToTop() {
		$('html,body').animate({scrollTop: 0}, 1000);
	}

	function filterPath(string) {
    return string
        .replace(/^\//, '')
        .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
        .replace(/\/$/, '');
	}

	var locationPath = filterPath(location.pathname);
	$('a[href*="#"]').each(function() {
	    var thisPath = filterPath(this.pathname) || locationPath;
	    //var hash = this.hash;
	    var hash = $(this).attr('href');
	    if ($("#" + hash.replace(/#/, '')).length) {
	        if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
	            var $target = $(hash),
	                target = this.hash;
	            if (target) {
	                $(this).click(function(event) {
	                    
                        event.preventDefault();
                        $('html,body').animate({scrollTop: $target.offset().top}, 1000, function() {
                            location.hash = target;
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            }
                        });
	                    
	                });
	            }
	        }
	    }
	});

	function reasignAnimationElements() {
		$animationElements = $('.animation-element');
		$window.trigger('scroll');
	}
});