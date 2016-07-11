$(function () {
	"use strict";


	//====  slider  ====
	
	$( "#slider" ).slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true

	});

	

	//====  dropDown menu  ====

	$( "#navButton" ).click( function(e) {
			
		$( ".headerNav" ).toggleClass( "dropDown" ); 
		$( ".fa" ).toggleClass( "fa-bars" );
		$( ".fa" ).toggleClass( "fa-times" );
		$( ".navText", this ).toggleClass( "navTextColor" );

	});

	$(window).click( function(e) {
		var target = $( e.target );
		if(!( target.is( "#navButton" ) || 
			target.is( ".fa-bars" ) || 
			target.is( ".fa-times" ) || 
			target.is( ".navText" ) ) ){

			$(".headerNav").each(function(){
				if( $( this ).hasClass( 'dropDown' )) {
		        	$( this ).removeClass( 'dropDown' );
		        }
			});
			$( ".fa" ).addClass( "fa-bars" );
			$( ".fa" ).removeClass( "fa-times" );
			$( ".navText" ).removeClass( "navTextColor" );
		}
	}); 
});