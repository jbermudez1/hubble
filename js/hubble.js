$( document ).ready( inicio );

function inicio () {
	dibujasvg();
	// body...
	$( ".topMenus" ).load( "menus.html", function(){
			$( ".showMenu" ).click(function() {
		  		$(".menuLateral").toggleClass("oculto");
		  		$("html").toggleClass("disableScroll");

			});
	} );



	$(".conoceMas").click( function(){
		window.location = "detalles.html" ;
	});
	$(".irComenzar").click( function(){
		window.location = "http://app.hubble.mx/empresa" ;
	});

	$("footer").load("footer.html");

}

function dibujasvg(){
	$("#svg").load("img/hubbleportada-01.svg");
}