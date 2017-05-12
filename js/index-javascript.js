// JavaScript Document
"use-strict";

function custom1() {
	window.scrollTo(0, 0);
    console.log('halleluah');
	  resizeElements();

	//$('.col-sm-3').show(1000);
	window.onresize= function() {
		resizeElements();
	}
}


function resizeElements() {
	$('.section1').css('height', (window.innerHeight * 0.8)+'px');
	$('.section2').css('height', (window.innerHeight * 0.8)+'px');
	// $('body').css('height', (window.innerHeight* 0.9)+'px');
}

function goToByScroll(dataId, dataType){
	console.log("this is"+ dataId);
	if(dataType=== 'id') {
    $('html,body').animate({scrollTop: $("#"+dataId).offset().top},'slow');
	}
	else if(dataType=== 'class') {
		$('html,body').animate({scrollTop: $("."+dataId).offset().top},'slow');
	}
}

$(function() {
    setTimeout(function() {
		$('.fly-in-text').removeClass('hidden1');
	}, 500);
});


$(function() {
    setTimeout(function() {
		$('.fly-in-text2').removeClass('hidden1');
	}, 2000);
});

$(function() {
    setTimeout(function() {
		$('.fly-in-text3').removeClass('hidden1');
	}, 5000);
});


$('#goToNext').on('click', function() {
    if (!($("section1").css('visibility') === 'hidden')) {
			// $('.section1').slideUp(1000);
			$('.section2').show();
			goToByScroll('section2', 'class');
		}
});

$('#goToPrev').on('click', function() {
	if (!($("section2").css('visibility') === 'hidden')) {
		$('.section2').slideUp(1000);
		$('.section1').slideDown(1000);
	}
});

custom1();
