var empty = '<div class="pd-top-60"></div>';
$(".round-1-1").click(function () {
	var htmlString = $( this ).html();
	var rd21 = $("#round-2-1").html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	if( (rd21 == rd31) && (rd21 == rd41) && (rd21 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd21 == rd31) && (rd21 != empty) ) {
		$("#round-3-1").html(htmlString);
	}
	$("#round-2-1").html(htmlString);
});
$(".round-1-2").click(function () {
	var htmlString = $( this ).html();
	var rd22 = $("#round-2-2").html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	if( (rd22 == rd31) && (rd22 == rd41) && (rd22 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd22 == rd31) && (rd22 != empty) ) {
		$("#round-3-1").html(htmlString);
	}
	$("#round-2-2").html(htmlString);
});
$(".round-1-3").click(function () {
	var htmlString = $( this ).html();
	var rd23 = $("#round-2-3").html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	if( (rd23 == rd32) && (rd23 == rd41) && (rd23 != empty) ) {
		if (rd23 != '<div class="pd-top-60"></div>') {
			$("#round-3-2").html(htmlString);
			$("#round-4-1").html(htmlString);
		}
	} else if ( (rd23 == rd32) && (rd23 != empty) ) {
		$("#round-3-2").html(htmlString);
	}
	$("#round-2-3").html(htmlString);
});
$(".round-1-4").click(function () {
	var htmlString = $( this ).html();
	var rd24 = $("#round-2-4").html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	if( (rd24 == rd32) && (rd24 == rd41) && (rd24 != empty) ) {
		$("#round-3-2").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd24 == rd32) && (rd24 != empty) ) {
		$("#round-3-2").html(htmlString);
	}
	$("#round-2-4").html(htmlString);
});
$(".round-2-1").click(function () {
	var htmlString = $( this ).html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	if( (rd31 == rd41) && (rd31 != empty) ) {
		$("#round-4-1").html(htmlString);
	}
	$("#round-3-1").html(htmlString);
});
$(".round-2-2").click(function () {
	var htmlString = $( this ).html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	if( (rd32 == rd41) && (rd32 != empty) ) {
		$("#round-4-1").html(htmlString);
	}
	$("#round-3-2").html(htmlString);
});
$(".round-3-1").click(function () {
	var htmlString = $( this ).html();
	$("#round-4-1").html(htmlString);
});